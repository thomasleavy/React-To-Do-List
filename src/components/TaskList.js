import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul id="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
