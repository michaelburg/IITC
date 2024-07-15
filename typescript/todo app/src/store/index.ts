// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, TasksState } from './reducers/tasks.reducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Explicitly export the TasksState type
export type { TasksState };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
