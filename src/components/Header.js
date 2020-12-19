import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {logoutUser} from "../actions/auth";


class Header extends Component {
    render() {
        return (

            <header className="header">
                <div className="content-container">
                  <div className="header__content">
                    <NavLink className="header__title" to="/dashboard">
                      <h1>Expensify</h1>
                    </NavLink>
                    <button className="button button--link" onClick={this.props.logoutUser}>Logout</button>
                  </div>
                </div>
            </header>
        )
    }
}

var matchDispatchToProps = function(dispatch){
    return ({
        logoutUser: () => dispatch(logoutUser())
    })
}

export default connect(undefined, matchDispatchToProps)(Header);