const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const { AppError } = require("./errorHandler");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  const token = createToken(user._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("You mUst Provide Email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.validatePassword(password, user.password))) {
    return next(new AppError("Invalid Email Or Password", 401));
  }

  const token = createToken(user._id);
  res.status(200).json({
    message: "success",
    token,
  });
});
