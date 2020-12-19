import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import expenseReducer from "../reducers/expensesReducer";
import filterReducer from "../reducers/filtersReducer";
import authReducer from "../reducers/authReducer";

import thunk from "redux-thunk";

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer,
        user: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function configureStore(){
    return store
};

export default configureStore;