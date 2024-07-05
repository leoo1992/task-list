/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import TaskPage from '../Pages/TaskPage';
import ErrorPage from '../Pages/ErrorPage';
import Header from '../Components/Header';

export default function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<ErrorPage />}
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
        <Route
          path="/task/:id"
          element={<TaskPage />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
