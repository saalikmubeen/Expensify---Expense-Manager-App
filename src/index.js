import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoadingPage from "./components/LoadingPage";
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history"
import configureStore from "./store/configureStore";
import {saveUser, removeUser} from "./actions/auth";
import { firebase } from "./firebase";
import { asyncSetExpenses } from "./actions/expenses"


var store = configureStore();
var history = createBrowserHistory();


ReactDOM.render(<LoadingPage/>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
   if(user){
      store.dispatch(saveUser(user.uid))
      store.dispatch(asyncSetExpenses()).then(function(){
      ReactDOM.render(<Provider store={store}>
                  <Router history={history}>
                     <App />
                  </Router>
               </Provider>, document.getElementById('root'));
               })
         if(history.location.pathname === "/"){
            history.push("/dashboard");
         }
            
   }else{
      store.dispatch(removeUser());
      ReactDOM.render(<Provider store={store}>
         <Router history={history}>
            <App />
         </Router>
      </Provider>, document.getElementById('root'));
      history.push("/");
   }
})
