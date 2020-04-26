import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer/rootreducer';
import thunk from 'redux-thunk' 
//install both of them means that we can able to interact with Firebase service
// and sync up our database with our  firestore
//provide redux bindings to firestore in particular
import { getFirestore, reduxFirestore } from 'redux-firestore';
//provide bindings to firebase service as a whole
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
//firebase config
import fbConfig from './config/fbConfig'
//thunk is a middleware and applyMiddleware this return a store enchancer so we can add multiple store enchancer to the store
//the way we do that by using compose
//like we used combineReducerto combine reducers 
//Similarly we use compose to combine store functionality


//there s a flick in the navbar when we are refreshng the page 
// It is because ReactDOM is rendering before the firebase authentication
// We need to wait so that so that firebase initialized
const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  // Config in the firebase which gives access to a promise
  reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
  )
);
// this is the promise
  store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
      <Provider store={store}><App /></Provider>,
      document.getElementById('root')
    );
  })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
