const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const authCountroller = require("./../controllers/authController");

router.post("/signup", authCountroller.signup);
router.post("/login", authCountroller.login);
router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

router.get("/:id/todos", userController.getUserTodos);
module.exports = router;
