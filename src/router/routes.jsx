import { Routes, Route } from "react-router";
import LayoutPage from "../components/layout/Layout";
import Main from "../pages/Main/Main";
import Projects from "../pages/Projects/Projects";
import Tasks from "../pages/Tasks/Tasks";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Main />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
};
