import axios from "axios";

export const Task = ({ task, onDelete, onStatusUpdate }) => {
  const handleDelete = () => {
    axios
    .delete("http://localhost:3004/tasks/" + task.id)
    .then((res) => {
      onDelete(task.id);
    });
  };
  const handleStatusUpdate = (id, status) => {
    axios
    .patch("http://localhost:3004/tasks/" + task.id, {status})
    .then (res => {
      onStatusUpdate(id, status);
    
  })}
  return (
    <div>
      <p>{task.text}</p>
      <select value={task.status}>
        <option onChange={e => handleStatusUpdate(task.id)}>in progress</option>
        <option onChange={e => handleStatusUpdate(task.id)}>unstarted</option>
        <option onChange={e => handleStatusUpdate(task.id)}>completed</option>
      </select>
      <button onClick={handleDelete}>X</button>
      {task.status == "in progress" ? (
        <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
      ) : task.status == "unstarted" ? (
        <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
      ) : (
        <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
      )}
    </div>
  );
};
