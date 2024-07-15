// src/store/reducers/tasks.reducer.ts
import { AnyAction } from 'redux';
import * as actionTypes from '../actionTypes';
import { Task } from '../../crud';

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = (state = initialState, action: AnyAction): TasksState => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case actionTypes.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case actionTypes.ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case actionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case actionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
