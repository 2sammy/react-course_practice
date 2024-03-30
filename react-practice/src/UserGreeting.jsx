import React from 'react'

export default function UserGreeting(props) {
    if(props.isLoggedIn){
        return <h2>welcome {props.username} </h2>
    }
    else{
        return <h2>Please login to continue</h2>
    }
}
