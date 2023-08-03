const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

router.get("/:id/todos", userController.getUserTodos);
module.exports = router;
