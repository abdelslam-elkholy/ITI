const jwt = require("jsonwebtoken");
const { AppError } = require("./errorHandler");
const { promisify } = require("util");
exports = async(req, res, next);
{
  if (!req.header.authorization) {
    return next(new AppError("There Is no token", 401));
  }

  try {
    const decoded = await promisify(jwt.verify)(
      req.header.authorization,
      process.env.JWT_SECRET
    );
  } catch (err) {
    return next(new AppError("credntilas is wrong", 401));
  }
  next();
}
