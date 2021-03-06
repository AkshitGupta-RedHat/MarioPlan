
import authReducer from './authreducer'
import projectReducer from './projectreducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    authreducer: authReducer,
    projectreducer: projectReducer,
    firestoreReducer: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer