import React, { Component } from 'react'
import {connect} from 'react-redux';
import {asyncAddExpense} from "../actions/expenses";
import ExpenseForm from "./ExpenseForm"

class AddExpensePage extends Component {

    saveExpense = async (expenseObj) => {
        await this.props.dispatch(asyncAddExpense(expenseObj))
        this.props.history.push("/");
    }

    render() {
        return (

            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm saveExpense={this.saveExpense}/>
                </div>
            </div>
        )
    }
}

export default connect()(AddExpensePage);