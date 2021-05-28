import {Redirect, Link} from "react-router-dom";
import React from "react";
import {CLIENT_ID} from "../redux/actions/actions";

export default function Login(props) {
    let redirectUri = 'localhost:3000'
    let endcodedUri = encodeURI(redirectUri)

    return (
        <a
            href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2F${endcodedUri}%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`}>Login</a>
    )

}