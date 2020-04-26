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
            case "LOG_OUT":
                console.log("LOG_OUT");  
                return  state 
            case "SIGN_UP":
                console.log("SIGN_UP");  
                return {
                    ...state,
                    authError:null   
                }
            case "SIGN_UP_ERR":
                console.log("SIGN_UP_ERR");  
                return {
                    ...state,
                    authError:action.err.message   
                }          
            default:
                console.log("Default");
                console.log(state);
              };
              console.log(state);
    return state;
}
export default authReducer