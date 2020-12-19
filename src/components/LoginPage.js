import React from "react";
import {connect} from 'react-redux';
import {loginUser} from "../actions/auth";

function LoginPage(props){
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p style={{marginBottom: "15px"}}>It's time to get your expenses under control.</p>
                <button className="button" onClick={props.loginUser}>Login with Google</button>
            </div>
        </div>
    )
}

var matchDispatchToProps = function(dispatch){
    return ({
        loginUser: () => dispatch(loginUser())
    })
}

export default connect(undefined, matchDispatchToProps)(LoginPage);