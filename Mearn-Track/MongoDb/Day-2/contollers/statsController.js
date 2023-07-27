const Student = require("./../models/studentModel");

const getStats = async (req, res) => {
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

    const studentsWithAvgGradeResult = await Student.aggregate([
      {
        $project: {
          FullName: { $concat: ["$FirstName", " ", "$LastName"] },
          courses: 1,
        },
      },
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
    ]);

    // Aggregation to combine student data with faculty data
    const studentsWithFacultyResult = await Student.aggregate([
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
      sumFinalMarks: sumFinalMarksResult[0]?.sumFinalMarks || 0,
      studentCount: studentCountResult[0]?.studentCount || 0,
      studentsCountInFaculties: studentsCountInFacultiesResult,
      studentsWithAvgGrade: studentsWithAvgGradeResult,
      studentsWithFaculty: studentsWithFacultyResult,
    };

    res.json(aggregations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching aggregations", error });
  }
};
