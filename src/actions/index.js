import {END_LOAD, SEND_REQUEST, LOGOUT, ADD_CART, REMOVE_CART, LOGIN_SUCCESS, LOGIN_FAIL, SET_USER_STATE, ADD_ADDRESS} from "./types";

export function addToCart( item ){
    return {
        type:ADD_CART,
        payload: item
    }
}

export function removeFromCart( item ){
    return {
        type: REMOVE_CART,
        payload: item
    }
}

export function endLoad(){
    return {
        type: END_LOAD
    }
}


export function sendRequest (){
    return {
        type: SEND_REQUEST,
    }
}

export function logInSuccess (userObject){
    return {
        type: LOGIN_SUCCESS,
        payload: userObject
    }
}

export function logInFail(){
    return {
        type: LOGIN_FAIL
    }
}


export function logOutUser(user_id){
    return {
        type: LOGOUT,
        payload: user_id
    }
}

export function setUser(userObject){
    return {
        type: SET_USER_STATE,
        payload:userObject
    }
}

export function addAddress(addressObject){
    return {
        type: ADD_ADDRESS,
        payload: addressObject
    }
}

