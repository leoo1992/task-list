export default function TaskItem({ task }) {
  return (
    <>
      <strong>{task.title}</strong>
      {task.completed ? 'OK' : 'X'}
    </>
  );
}
