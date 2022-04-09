import { EMPLOYEES_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}
export const employeesSuccess = (payload) => {
    console.log('pay',payload)
    return {
        type: EMPLOYEES_SUCCESS,
        payload
    }
}

export const logout = ()=>{
    return {
        type: LOGOUT,
    }
}