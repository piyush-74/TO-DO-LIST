import { createStore, combineReducers } from 'redux';
import taskReducer from './redux/actions';

const store = createStore(combineReducers({ tasks: taskReducer }));

export default store;