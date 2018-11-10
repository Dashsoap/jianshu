import{combineReducers}from 'redux';

import headerReducer from '../common/header/store/reducer';import { from } from 'rxjs';

export default combineReducers({
    header:headerReducer
})