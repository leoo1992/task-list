export const EditTask = (taskList, id, updatedTask) => {
  return taskList.map((task) => (task.id === id ? updatedTask : task));
};
