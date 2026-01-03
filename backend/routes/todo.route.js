import { Router } from "express";
import {
  createTodoController,
  deleteTodoController,
  getAllTodosController,
  updateTodoController,
} from "../controllers/todo.controller.js";
const todosRouter = Router();

//create a new todo
todosRouter.post("/", createTodoController);

//get all todos
todosRouter.get("/", getAllTodosController);

//update a todo
todosRouter.put("/:id", updateTodoController);

//delete a todo
todosRouter.delete("/:id", deleteTodoController);
export default todosRouter;
