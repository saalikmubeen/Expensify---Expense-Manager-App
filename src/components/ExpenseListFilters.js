import React, { Component } from 'react'
import {connect} from "react-redux";
import 'react-dates/initialize'
import {DateRangePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";


class ExpenseListFilters extends Component {
       constructor(props){
           super(props);

           this.state = {
               focusedInput: false
           }
       }

    handleChange = (e) => {
         this.props.dispatch(setTextFilter(e.target.value))
    }

    handleFilterByChange = (e) => {
         if(e.target.value === "date"){
             this.props.dispatch(sortByDate())
         }else if(e.target.value === "amount"){
             this.props.dispatch(sortByAmount())
         }
    }

    handleDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render() {
        return (

            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search expenses"
                            value={this.props.filters.text}
                            onChange={this.handleChange}
                        />
                    </div>
        
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.handleFilterByChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
        
                    <div className="input-group__item">
                        <DateRangePicker
                                startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={this.handleDatesChange} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                                showClearDates={true}
                            />   
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {filters: state.filters}
}

export default connect(mapStateToProps)(ExpenseListFilters);







// class ExpenseListFilters extends Component {

//     state = {
//         text: this.props.filters.text
//     }

//     handleChange = (e) => {
//         this.setState({text: e.target.value}, () => {
//             this.props.dispatch(setTextFilter(this.state.text))
//         })
//     }

//     render() {
//         console.log(this.props.filters.text)
//         return (
//             <div>
//                 <input type="text" value={this.state.text} onChange={this.handleChange}/>
//             </div>
//         )
//     }
// }


