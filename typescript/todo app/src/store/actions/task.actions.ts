// src/store/actions/task.actions.ts
import { Dispatch } from "redux";
import { Task } from "../../crud";
import * as actionTypes from "../actionTypes";
import { getTasks, addTask, updateTask, deleteTask } from "../../crud";

export const fetchTasks = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_TASKS_REQUEST });
  try {
    const tasks = await getTasks();
    dispatch({ type: actionTypes.FETCH_TASKS_SUCCESS, payload: tasks });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_TASKS_FAILURE, error });
  }
};

export const createTask = (task: Task) => async (dispatch: Dispatch) => {
  try {
    const newTask = await addTask(task);
    dispatch({ type: actionTypes.ADD_TASK_SUCCESS, payload: newTask });
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const editTask = (task: Task) => async (dispatch: Dispatch) => {
  try {
    const updatedTask = await updateTask(task);
    dispatch({ type: actionTypes.UPDATE_TASK_SUCCESS, payload: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const removeTask =
  (id: number | string) => async (dispatch: Dispatch) => {
    try {
      await deleteTask(id);
      dispatch({ type: actionTypes.DELETE_TASK_SUCCESS, payload: id });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
