/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import TaskPage from '../Pages/TaskPage';
import RouteIncorrectPage from '../Pages/RouteIncorrectPage';
import ErrorPage from '../Pages/ErrorPage';

export default function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<RouteIncorrectPage />}
        />
        <Route
          path="/"
          element={<HomePage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/task"
          element={<TaskPage />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
