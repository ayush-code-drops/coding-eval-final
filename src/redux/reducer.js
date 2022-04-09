import { EMPLOYEES_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

const initState = {
    isAuth: false,
  employees:[]  
}
export const reducer = (state=initState,{type,payload}) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth:true,
            }
        case LOGOUT:
            return {
                ...state,
                isAuth:false,
            }
        case EMPLOYEES_SUCCESS:
            
            return {
                ...state,
               employees:payload
            }
        default:
            return state
   } 
}