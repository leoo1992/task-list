export const AddTask = (taskList, task) => {
  return [...taskList, { ...task, completed: true }];
};
