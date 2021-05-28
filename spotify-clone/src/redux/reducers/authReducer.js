import {SET_CODE, SET_TOKEN} from "../actions/action_types";

const initialState = {
    'code': null,
    'tokenObj': null,
    'ends_at': null,
    'state': '',
}
export default function authReducer(state=initialState, action){
    switch (action.type){
        case SET_CODE:
            return {...state, code: action.data.code, state: action.data.state}
        case SET_TOKEN:
            return {...state, tokenObj: action.data.tokenObj, expires_at: action.data.expires_at}
        default:
            return state
    }
}