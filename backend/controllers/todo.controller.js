import pool from "../db/db.js";



export const createTodoController = async (req, res) => {
  try {
    const { description, completed } = req.body;
    if (!description || !completed) {
      res.status(400).json({
        message: "Description and completed are required",
      });
    }
    const newTodo = await pool.query(
      "INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING *",
      [description, completed || false]
    );
    res.status(201).json(newTodo.rows[0]); //returning the new todo created -> this is the todo that was created in the database -> 0th index is the todo that was created
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};



export const getAllTodosController = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.status(200).json(allTodos.rows); //returning all the todos from the database
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};



export const updateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, completed } = req.body;
    if (!description || !completed) {
      res.status(400).json({
        message: "Description and completed status are required",
      });
    }
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1, completed=$2 WHERE todo_id = $3 RETURNING *",
      [description, completed, id]
    );
    if (updatedTodo.rows.length === 0) {
      res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json(updatedTodo.rows[0]);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};



export const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1 RETURNING *",
      [id]
    );
    if (deletedTodo.rows.length === 0) {
      res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
