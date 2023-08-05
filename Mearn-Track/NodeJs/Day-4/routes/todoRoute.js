const express = require("express");
const router = express.Router();
const todoController = require("./../controllers/todoController");
const authMiddleware = require("./../middlewares/authMiddleware");
router
  .route("/")
  .get(todoController.getTodos)
  .post(authMiddleware, todoController.createTodo);

router
  .route("/:id")
  .get(todoController.getTodo)
  .patch(authMiddleware, todoController.updateTodo)
  .delete(authMiddleware, todoController.deleteTodo);

module.exports = router;
