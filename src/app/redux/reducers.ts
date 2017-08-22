import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { config } from './modules/rConfig';
import { edit } from './modules/rEdit';
import { table } from './modules/rTable';
import { message } from './modules/rCommand';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  config,
  edit,
  table,
  message,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
