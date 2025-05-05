// src/components/ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/actions/todoActions';

const ListTask = () => {
  // Select tasks and filter from the Redux state
  const tasks = useSelector((state) => state.tasks);
  const currentFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // Filter tasks based on the current filter setting
  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'done') {
      return task.isDone;
    }
    if (currentFilter === 'notDone') {
      return !task.isDone;
    }
    return true; // 'all' filter shows all tasks
  });

  return (
    <div>
      {/* Filter Buttons */}
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => dispatch(setFilter('all'))}
          disabled={currentFilter === 'all'} // Disable if already active
          style={{ marginRight: '5px' }}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('done'))}
          disabled={currentFilter === 'done'}
          style={{ marginRight: '5px' }}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter('notDone'))}
          disabled={currentFilter === 'notDone'}
        >
          Not Done
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks match the current filter.</p>
        )}
      </ul>
    </div>
  );
};

export default ListTask;