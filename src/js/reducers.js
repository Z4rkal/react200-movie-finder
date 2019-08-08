import { combineReducers } from 'redux';
import header from './components/Header/HeaderReducer';

const rootReducer = combineReducers({
    header
});

export default rootReducer;