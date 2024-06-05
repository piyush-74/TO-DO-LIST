import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, updateTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  const handleEditTask = (index, text) => {
    setEditTaskIndex(index);
    setEditTaskText(text);
  };

  const handleSaveTask = () => {
    dispatch(updateTask(editTaskIndex, editTaskText));
    setEditTaskIndex(null);
    setEditTaskText('');
  };

  return (
    <div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
            <span>{task.text}</span>
            <div>
              <button className="btn btn-success btn-sm me-2" onClick={() => dispatch(toggleTask(index))}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditTask(index, task.text)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(index))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit Task Modal */}
      <div className={`modal ${editTaskIndex !== null ? 'd-block' : ''}`} tabIndex="-1" style={{ display: editTaskIndex !== null ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Task</h5>
              <button type="button" className="btn-close" onClick={() => setEditTaskIndex(null)}></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editTaskText}
                onChange={(e) => setEditTaskText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setEditTaskIndex(null)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveTask}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
