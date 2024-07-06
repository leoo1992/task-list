/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Loader from '../../Components/Loader';
import TaskItem from '../../Components/TaskItem';
import ErrorPage from '../../Pages/ErrorPage';
import { GetTaskList } from '../../Actions/GetTaskList';

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const data = await GetTaskList();

        if (data === null) {
          setError(true);
        } else {
          setTaskList(data);
        }
      } catch (err) {
        setError(true);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchTaskList();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <div key={task.id}>
            <TaskItem task={task} />
          </div>
        ))}
      </ul>
    </div>
  );
}
