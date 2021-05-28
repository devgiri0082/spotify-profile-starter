import {GENERATE_TOKEN, SET_CODE, SET_ERROR, SET_LOADING_STATUS, SET_TOKEN, SET_USER_DATA} from "./action_types";

const axios = require('axios')
const qs = require('querystring')

export const CLIENT_ID = 'da6665b8830c49fa899b77d25f73e232'
const CLIENT_SECRET = 'bbf20a4383a54195940c16ce9d4b661f'


async function getToken(code) {
    const credential = `${CLIENT_ID}:${CLIENT_SECRET}`
    const encodedCred = btoa(credential)
    const encodedUri = encodeURI('http://localhost:3000/callback')

    let response = await axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        headers: {'Authorization': `Basic ${encodedCred}`},
        data: qs.stringify({
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': encodedUri
        })
    })
    console.log('response of access token', response.data)
    return response.data
    // } catch (e) {
    //     return e
    // }
}


const getUserData = async (acceess_token) => {
    let response = await axios({
        url: 'https://api.spotify.com/v1/me',
        method: 'get',
        headers: {'Authorization': `Bearer ${acceess_token}`},
    })
    console.log('response of user data request', response.data)
    return response.data
}

export const setCode = (code, state) => ({
    type: SET_CODE,
    data: {'code': code, 'state': state}
})

export const setToken = (tokenObj, expires_at) => ({
    type: SET_TOKEN,
    data: {'tokenObj': tokenObj, 'expires_at': expires_at}
})

export const setError = (e) => ({
    type: SET_ERROR,
    data: e
})
export const setLoadingState = (status) => ({
    type: SET_LOADING_STATUS,
    data: status
})

export const setUserData = (userObj) => ({
    type: SET_USER_DATA,
    data: userObj
})

export function refreshToken() {
    return async function (dispatch, getState) {
        let state = getState().auth
        try {
            const tokenObj = await getToken(state.code)
            dispatch(setToken(tokenObj, new Date().getTime() + parseInt(tokenObj.expires_in)))
        } catch (e) {
            console.log('Error Set')
            dispatch(setError(e))
        }

    }
}


export function checkUserData() {
    return async function (dispatch, getState) {
        let authState = getState().auth
        // let appState = getState().app
        try {
            let userObj = await getUserData(authState.tokenObj.access_token)
            dispatch(setUserData(userObj))
        } catch (e) {
            dispatch(setError(e))
        }
    }
}