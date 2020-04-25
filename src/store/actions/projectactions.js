import { findAllByLabelText } from "@testing-library/react";

export const projectActions = (project) =>{
    console.log(project);
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
       const firestore = getFirestore();
       firestore.collection ("project").add({
          ...project,
          authorFrstName:'aksh',
          authorLastName:'Nnja',
        authorID: 1234,
        createdAt: new Date()
       }).then(()=> {
        dispatch({ type:'CREATE_PROJECT', project });
       }).catch((err)=>{
        dispatch({ type:'CREATE_PROJECT_ERROR', err }); 
       })

        
    }
}