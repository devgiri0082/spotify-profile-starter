import {useLocation} from 'react-router-dom'
import React from "react";
export default function Callback(props){
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');


    return (
        <h1>{ code }</h1>
    )
}