/* eslint-disable no-unused-vars */
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import {
  GetTaskList,
  AddTask,
  DeleteTask,
  EditTask,
  ToggleTaskCompletion,
} from '../Actions';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
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

  const addTask = useCallback((task) => {
    setTaskList((prevTaskList) => AddTask(prevTaskList, task));
  }, []);

  const editTask = useCallback((id, updatedTask) => {
    setTaskList((prevTaskList) => EditTask(prevTaskList, id, updatedTask));
  }, []);

  const deleteTask = useCallback((id) => {
    setTaskList((prevTaskList) => DeleteTask(prevTaskList, id));
  }, []);

  const toggleTaskCompletion = useCallback((id) => {
    setTaskList((prevTaskList) => ToggleTaskCompletion(prevTaskList, id));
  }, []);

  const contextValue = useMemo(
    () => ({
      taskList,
      loading,
      error,
      addTask,
      editTask,
      deleteTask,
      toggleTaskCompletion,
    }),
    [
      taskList,
      loading,
      error,
      addTask,
      editTask,
      deleteTask,
      toggleTaskCompletion,
    ],
  );

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
