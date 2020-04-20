export const projectActions = (project) =>{
    console.log(project);
    return (dispatch, getState) =>{
        dispatch({ type:'CREATE_PROJECT', project });
    }
}