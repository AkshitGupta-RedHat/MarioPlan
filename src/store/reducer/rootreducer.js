
import authReducer from './authreducer'
import projectReducer from './projectreducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    authreducer: authReducer,
    projectreducer: projectReducer,
    firestoreReducer: firestoreReducer
});

export default rootReducer