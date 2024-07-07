export const DeleteTask = (taskList, id) => {
  return taskList.filter((task) => task.id !== id);
};
