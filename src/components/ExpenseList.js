import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

var ExpenseList = (props) => {
    return(

        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>

            <div className="list-body">
            {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
                )
            }
            </div>
        </div>
    )
}

var mapStateToProps = (state) => {
    return {expenses: getVisibleExpenses(state.expenses, state.filters)}
}


export default connect(mapStateToProps)(ExpenseList);

// var ConnectedExpenseList = connect((state) => {
//     return {
//        ...state
//     }
// })(ExpenseList)

// export default ConnectedExpenseList;

// connect takes a mapStateToProps(a function) as argument that passes the store state/data
// to the component that needs to connect to the store. The store data passed to the component 
// Every time store state changes connect runs and passes fresh store state to its connected components
// This makes our components to be in sync with the store.
// if we don't pass any arguments to connect() then only dispatch will be accessible in 
// our component via props.dispatch we won't be able to access store state/data. 

