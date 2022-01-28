import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoute({component:Component, ...rest}) {
  
  return (<Route {...rest} render={()=>{
    if(localStorage.getItem('token')){
      return <Component/>
    } else {
      return <Redirect to='/' />
    }
  }}/>);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute