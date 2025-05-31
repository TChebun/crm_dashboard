import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./tasks/tasks";

const rootReducer = combineReducers({
  // main:
  tasks: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
