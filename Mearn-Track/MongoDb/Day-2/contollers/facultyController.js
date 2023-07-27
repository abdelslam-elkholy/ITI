const Faculty = require("./../models/facultyModel");

exports.getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();

    res.status(200).json({
      status: "success",
      studentsLength: faculties.length,
      data: {
        faculties,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const newFaculty = await Faculty.create(req.body);
    res.status(201).json({
      message: "success",
      data: {
        faculty: newFaculty,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
