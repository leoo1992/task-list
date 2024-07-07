export const ToggleTaskCompletion = (taskList, id) => {
  return taskList.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );
};
