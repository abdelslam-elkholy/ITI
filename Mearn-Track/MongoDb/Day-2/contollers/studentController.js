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

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: {
        deletedStudent: student,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "not found",
      message: error,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        deletedStudent: student,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "not found",
      message: error,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      status: "success",
      studentsLength: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
