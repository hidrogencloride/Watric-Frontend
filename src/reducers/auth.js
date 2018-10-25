import {END_LOAD, SEND_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SET_USER_STATE, ADD_ADDRESS} from '../actions/types'
export default function(state = { user:{}, isFetching:false }, action){
    switch(action.type)
    {
        case SEND_REQUEST:
            console.log(state);
            let copy = Object.assign({},state);
            copy.isFetching = true;
            return copy;

        case LOGIN_SUCCESS:

            return state;

        case LOGIN_FAIL:
            let newState = Object.assign({},state);
            newState.isFetching = false;
            return newState;

        case END_LOAD:
            let toChange = Object.assign({},state);
            toChange.isFetching = false;
            return toChange;

        case SET_USER_STATE:
            let newUser = Object.assign({}, state);
            console.log(action);
            newUser.user = action.payload;
            return newUser;

        case ADD_ADDRESS:
            let newAddress = Object.assign({},state);
            newAddress.user.addresses = [...newAddress.user.addresses, ...[action.payload]];
            console.log(newAddress);
            return newAddress;

        default:
            return state;
    }
}