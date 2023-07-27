const Student = require("./../models/studentModel");

exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({
      message: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
