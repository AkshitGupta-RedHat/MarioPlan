

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

export const signOut = () =>{
    return (dispatch,getState, {getFirebase})=> {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({type: 'LOG_OUT'})
        })
    }
}

    export const signUp = (newuser) => {
        //{getFirebase}, {getFirestore} is not correct
        //{getFirebase, getFirestore} is correct
        return (dispatch,getState,{getFirebase, getFirestore}) => {
            const firebase = getFirebase();
            const firestore = getFirestore();
            firebase.auth().createUserWithEmailAndPassword(
                newuser.email,
                newuser.password
            ).then(resp => {
                firestore.collection('users').doc(resp.user.uid).set({
                    firstname: newuser.firstname,
                    lastname: newuser.lastname,
                    initials: newuser.firstname[0] + newuser.lastname[0]
                }).then(() => {
                    dispatch({ type:'SIGN_UP'})
                })
            })
        }
    }