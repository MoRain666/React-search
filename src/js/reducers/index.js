import { combineReducers } from 'redux';
import { isStocked } from './stateOfProducts';
import { filterText } from './filterText';

const products = combineReducers({
    isStocked,
    filterText
});

export default products;