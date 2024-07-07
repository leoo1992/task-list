/* eslint-disable no-unused-vars */
import { useTaskContext } from '../../Contexts/TaskContext';
import Loader from '../../Components/Loader';
import TaskItem from '../../Components/TaskItem';
import ErrorPage from '../../Pages/ErrorPage';

export default function TaskList() {
  const { taskList, loading, error } = useTaskContext();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {taskList.map((task) => (
        <div key={task.id}>
          <TaskItem task={task} />
        </div>
      ))}
    </>
  );
}
