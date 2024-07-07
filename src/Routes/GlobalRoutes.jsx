/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskProvider } from '../Contexts/TaskContext';
import { lazy, Suspense } from 'react';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import ErrorPage from '../Pages/ErrorPage';

const HomePage = lazy(() => import('../Pages/HomePage'));
const TaskPage = lazy(() => import('../Pages/TaskPage'));

export default function GlobalRoutes() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Header />
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </TaskProvider>
    </BrowserRouter>
  );
}
