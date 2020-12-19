import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import numeral from "numeral";

class ExpensesSummary extends Component {
    render() {
        var numOfVisibleExpenses = this.props.visibleExpenses.length;
        var totalExpense = getTotalExpenses(this.props.visibleExpenses);
        return (

            <div className="page-header">
                <div className="content-container">
                <h1>{`Viewing ${numOfVisibleExpenses} expenses totalling ${numeral(totalExpense).format('$0,0.00')}`}</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
                </div>
            </div>
        )
    }
}


var mapStateToProps = (state) => {
    return {
        visibleExpenses : getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);