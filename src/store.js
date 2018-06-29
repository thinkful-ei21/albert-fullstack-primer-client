import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import cheeseReducer from './reducers/cheese.js'

export default createStore(cheeseReducer, applyMiddleware(thunk));
