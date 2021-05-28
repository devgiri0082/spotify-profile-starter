import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkUserData, refreshToken} from "../redux/actions/actions";

export default function Profile(props) {
    let authState = useSelector(state => state.auth)
    let appState = useSelector(state => state.app)
    let dispatch = useDispatch()
    // if (authState.tokenObj === null) dispatch(refreshToken())
    // dispatch(checkUserData())
    useEffect(() => {
        dispatch(refreshToken())
        dispatch(checkUserData())
    }, [])
    console.log(appState)
    return (
        <h1>{appState.loading ? 'loading' : <p>Profile {JSON.stringify( appState.loggedInUser )}</p>}</h1>
    )
}