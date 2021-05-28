import {SET_CODE, SET_ERROR, SET_TOKEN} from "../actions/action_types";

const initialState = {
    'loading': true,
    'code': null,
    'tokenObj': null,
    'ends_at': null,
    'state': '',
    error : ''
}
export default function authReducer(state=initialState, action){
    switch (action.type){
        case SET_CODE:
            return {...state, code: action.data.code, state: action.data.state}
        case SET_TOKEN:
            return {...state, tokenObj: action.data.tokenObj, expires_at: action.data.expires_at, error: '', loading: false}
        case SET_ERROR:
            return {...state, error: action.data, loading: false}
        default:
            return state
    }
}