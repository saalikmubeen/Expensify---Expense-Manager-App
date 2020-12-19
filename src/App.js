import React, { Component } from "react";
import "./styles/styles.scss";
import {Redirect, Route, Switch} from "react-router-dom";
import ExpenseDashBoard from "./components/ExpenseDashBoard";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import {connect} from 'react-redux';

class App extends Component {
  render() {
    var {isAuthenticated} = this.props;
    return (
      <div className='App'>
           {isAuthenticated && <Header/>}
           <Switch>
             <Route path="/" exact render={(routerProps) => isAuthenticated ? <Redirect to="/dashboard"/> : <LoginPage {...routerProps}/>}/>
             <Route path="/dashboard" exact render={(routerProps) => isAuthenticated ? <ExpenseDashBoard {...routerProps}/> : <Redirect to="/"/>}/>
             <Route path="/create" exact render={(routerProps) => isAuthenticated ? <AddExpensePage {...routerProps}/> : <Redirect to="/"/>}/>
             <Route path="/edit/:id" exact render={(routerProps) => isAuthenticated ? <EditExpensePage {...routerProps}/> : <Redirect to="/"/>}/>
             <Route render={(routerProps) => isAuthenticated ? <Redirect to="/dashboard"/> : <Redirect to="/"/>}/>
           </Switch>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {isAuthenticated: !!state.user.uid}
}

export default connect(mapStateToProps)(App);
