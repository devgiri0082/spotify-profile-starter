import {SET_ERROR, SET_LOADING_STATUS, SET_USER_DATA} from "../actions/action_types";

const initialState = {
    'loading': true,
    'loggedInUser': null,
    'error': ''
}


export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.data, loading: false}
        case SET_LOADING_STATUS:
            return {...state, loading: action.data}
        case SET_USER_DATA:
            return {...state, loggedInUser: action.data, loading: false, error: ''}
        default:
            return state
    }
}