import { Routes, Route } from "react-router";
import LayoutPage from "../components/layout/Layout";
import Main from "../pages/Main/Main";
import Projects from "../pages/Projects/Projects";
import Tasks from "../pages/Tasks/Tasks";

export const useRoutes = () => {
  const path = {
    MAIN: "/",
    PROJECTS: "projects",
    TASKS: "tasks",
  };

  return (
    <Routes>
      <Route path={path.MAIN} element={<LayoutPage />}>
        <Route index element={<Main />} />
        <Route path={path.PROJECTS} element={<Projects />} />
        <Route path={path.TASKS} element={<Tasks />} />
      </Route>
    </Routes>
  );
};
