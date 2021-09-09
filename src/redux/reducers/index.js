import { combineReducers } from 'redux';
import { productReducers } from './productReducers';

const reducers = combineReducers({
    product: productReducers, 
});

export default (state, action) => reducers(state, action);