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
import { useToast } from './ToastContext';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const { showToast } = useToast();

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
        console.log(err);
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

  const deleteTask = useCallback(
    async (id) => {
      try {
        const result = await DeleteTask(taskList, id);
        setTaskList(result);
        showToast('Tarefa excluída', { type: 'success' });
      } catch (error) {
        console.log(error);
        showToast('Erro ao excluir tarefa', { type: 'error' });
      }
    },
    [taskList, showToast],
  );

  const toggleTaskCompletion = useCallback((id) => {
    setTaskList((prevTaskList) => ToggleTaskCompletion(prevTaskList, id));
  }, []);

  const handleDeleteClick = useCallback((task) => {
    setTaskToDelete(task);
    setIsModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    deleteTask(taskToDelete.id);
    setIsModalOpen(false);
  }, [deleteTask, taskToDelete]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
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
      isModalOpen,
      taskToDelete,
      handleDeleteClick,
      handleConfirmDelete,
      handleCloseModal,
      openDropdownId,
      setOpenDropdownId,
    }),
    [
      taskList,
      loading,
      error,
      addTask,
      editTask,
      deleteTask,
      toggleTaskCompletion,
      isModalOpen,
      taskToDelete,
      handleDeleteClick,
      handleConfirmDelete,
      handleCloseModal,
      openDropdownId,
      setOpenDropdownId,
    ],
  );

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
