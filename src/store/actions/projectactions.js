import { findAllByLabelText } from "@testing-library/react";

export const projectActions = (project) =>{
    console.log(project);
    
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
       const firestore = getFirestore();
console.log(getState());
       firestore.collection("project").add({
          ...project,
          authorFirstName:getState().firebase.profile.firstname,
         authorLastName:getState().firebase.profile.lastname,
        authorID: getState().firebase.auth.uid,
        createdAt: new Date()
       }).then(()=> {
        dispatch({ type:'CREATE_PROJECT', project });
       }).catch((err)=>{
        dispatch({ type:'CREATE_PROJECT_ERROR', err }); 
       })

        
    }
}