import { createSlice } from "@reduxjs/toolkit";

const taskState = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
  success: null,
};

const taskSlice = createSlice({
  initialState: taskState,
  name: "tasks",
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload;
    },
    getTask: (state, action) => {
      state.task = action.payload;
    },
    fetchStarted: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    fetchError: (state) => {
      state.loading = false;
      state.error = true;
      state.success = null;
    },
    fetchSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    resetSuccess: (state) => {
      state.success = null;
    },
  },
});

export const { getTasks, getTask } = taskSlice.actions;

export default taskSlice.reducer;
