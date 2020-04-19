
import authReducer from './authreducer'
import projectReducer from './projectreducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authreducer: authReducer,
    projectreducer: projectReducer
});

export default rootReducer