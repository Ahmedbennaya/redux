import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = newDescription;
      }
    },
  },
});

export const { addTask, toggleTaskStatus, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
