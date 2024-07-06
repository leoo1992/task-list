export const GetTaskList = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
};
