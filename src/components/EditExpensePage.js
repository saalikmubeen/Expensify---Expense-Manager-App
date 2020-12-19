import React, { Component } from 'react'
import {connect} from "react-redux";
import {asyncEditExpense, asyncRemoveExpense} from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

class EditExpensePage extends Component {

    editExpense = (expenseObj) => {
        this.props.dispatch(asyncEditExpense(this.props.expense.id, expenseObj))
                .then(() => {
                    this.props.history.push("/");
                })
    }

    handleClick = () => {
         this.props.dispatch(asyncRemoveExpense({id: this.props.expense.id}))
                  .then(() => {
                   this.props.history.push("/");
                   })
    }

    render() {
        return (

            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm expense={this.props.expense} saveExpense={this.editExpense}/>
                    <button className="button button--secondary" onClick={this.handleClick}>Remove Expense</button>
                </div>
            </div>
        )
    }
}

var matchStateToProps = (state, props) => {
         return {
             expense: state.expenses.find((expense) => expense.id === props.match.params.id)
         }
}

export default connect(matchStateToProps)(EditExpensePage);