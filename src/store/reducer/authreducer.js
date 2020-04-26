const initState= {authError:null}

const authReducer = (state = initState, action) => {
    console.log(state,action);
    switch(action.type){
        case "SIGNIN_SUCCESS":
            console.log("SIGNIN_SUCCESS");
            console.log(state);
            return {state,
                authError:null }
            case "SIGNIN_ERR":
                console.log("SIGNIN_ERR");  
                return {
                    ...state,
                    authError:'Login Failed'    
                }
            default:
                console.log("Default");
                console.log(state);
              };
              console.log(state);
    return state;
}
export default authReducer