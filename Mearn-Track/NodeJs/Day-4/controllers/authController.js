const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const { AppError, errorHandler } = require("./errorHandler");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

exports.createUser = catchAsync(async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  const token = createToken(user_id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});
