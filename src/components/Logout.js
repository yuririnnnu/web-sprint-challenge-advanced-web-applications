import React, {useEffect} from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

const Logout = () => {
    const {push} = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        axiosWithAuth().post('/logout', {}, {
            headers:{
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem("token")
            push('/')
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.