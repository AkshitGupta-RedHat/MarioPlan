

export const signInAction= (credentiaals) => {
 return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        credentiaals.email,
        credentiaals.password
    ).then(()=> {
        dispatch({type: 'SIGNIN_SUCCESS'})
    }).catch((err)=> {
        dispatch({type: 'SIGNIN_ERR', err})
    })
    
 }
}