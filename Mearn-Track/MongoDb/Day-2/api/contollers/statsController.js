const Student = require("./../models/studentModel");

exports.getStats = async (req, res) => {
  try {
    const sumGrades = await Student.aggregate([
      {
        $group: {
          _id: null,
          sumGrades: { $sum: "$courses.grade" },
        },
      },
    ]);

    const studentCount = await Student.aggregate([
      {
        $group: {
          _id: null,
          studentCount: { $sum: 1 },
        },
      },
    ]);

    const studentsCountInFaculties = await Student.aggregate([
      {
        $group: {
          _id: "$FacultyID",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "faculties",
          localField: "_id",
          foreignField: "_id",
          as: "Faculty",
        },
      },
      {
        $unwind: "$Faculty",
      },
    ]);

    const studentsWithAvgGrade = await Student.aggregate([
      {
        $unwind: "$courses",
      },
      {
        $group: {
          _id: "$_id",
          FullName: { $first: "$FullName" },
          AvgGrade: { $avg: "$courses.grade" },
        },
      },
      {
        $project: {
          FullName: { $concat: ["$FirstName", " ", "$LastName"] },
          courses: 1,
        },
      },
    ]);

    const studentsWithFaculty = await Student.aggregate([
      {
        $lookup: {
          from: "faculties",
          localField: "FacultyID",
          foreignField: "_id",
          as: "Faculty",
        },
      },
      {
        $project: {
          FullName: { $concat: ["$FirstName", " ", "$LastName"] },
          Faculty: { $arrayElemAt: ["$Faculty", 0] },
        },
      },
    ]);

    const aggregations = {
      sumGrades: sumGrades[0]?.sumFinalMarks || 0,
      studentCount: studentCount[0]?.studentCount || 0,
      studentsCountInFaculties,
      studentsWithAvgGrade,
      studentsWithFaculty,
    };

    res.status(200).json({
      message: "success",
      data: {
        aggregations,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching aggregations", error });
  }
};
