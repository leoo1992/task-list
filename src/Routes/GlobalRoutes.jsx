/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';
import Suspense from '../utils/Suspense';
import Header from '../Components/Header';
import ErrorPage from '../Pages/ErrorPage';

const HomePage = lazy(() => import('../Pages/HomePage'));
const TaskPage = lazy(() => import('../Pages/TaskPage'));

export default function GlobalRoutes() {
  const [hasError, setHasError] = useState(false);

  return (
    <BrowserRouter>
      {!hasError && <Header />}
      <Suspense>
        <Routes>
          <Route
            path="*"
            element={<ErrorPage setHasError={setHasError} />}
          />
          <Route
            path="/"
            element={<HomePage />}
            errorElement={<ErrorPage setHasError={setHasError} />}
          />
          <Route
            path="/task"
            element={<TaskPage />}
            errorElement={<ErrorPage setHasError={setHasError} />}
          />
          <Route
            path="/task/:id"
            element={<TaskPage />}
            errorElement={<ErrorPage setHasError={setHasError} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
