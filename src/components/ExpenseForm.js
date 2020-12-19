import React, { Component } from 'react'
import moment from "moment";
import 'react-dates/initialize'
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: this.props.expense ? this.props.expense.description : "",
            note: this.props.expense ? this.props.expense.note : "",
            amount: this.props.expense ? this.props.expense.amount : "",
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            return this.setState({error: "Provide a description and amount!"})
        }

        this.setState({error: ""});
        this.props.saveExpense({
             description: this.state.description, 
             note: this.state.note, 
             amount: this.state.amount, 
             createdAt: this.state.createdAt.valueOf()})
    }

    render() {
        return (
            
            <form className="form" onSubmit={this.handleSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    name="description"        
                    autoFocus
                    autoComplete="off"
                    className="text-input"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                
                <input
                    type="text"
                    placeholder="Amount"
                    name="amount"
                    autoComplete="off"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.handleChange}
                />

                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ createdAt: date })} // PropTypes.func.isRequired
                    focused={this.state.calenderFocused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ calenderFocused: focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

                <textarea
                    placeholder="Add a note for your expense (optional)"
                    name="note"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.handleChange}
                >
                </textarea>

                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
            
        )
    }
}


export default ExpenseForm;