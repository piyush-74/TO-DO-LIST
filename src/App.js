import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title text-center">React To-Do Application</h1>
                <TaskInput />
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
