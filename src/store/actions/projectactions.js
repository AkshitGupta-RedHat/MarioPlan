export const projectActions = (project) =>{
    console.log(project);
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        dispatch({ type:'CREATE_PROJECT', project });
    }
}