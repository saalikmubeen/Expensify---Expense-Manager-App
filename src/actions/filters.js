// set text filter action generator
export function setTextFilter(text = ""){
    return {
        type: "SET_TEXT_FILTER",
        text: text
    }
}

// sort by amount action generator
export function sortByAmount(){
    return {
        type: "SORT_BY_AMOUNT"
    }
}

// sort by date action generator
export function sortByDate(){
    return {
        type: "SORT_BY_DATE"
    }
}

// set start date action generator
export function setStartDate(startDate){
    return {
        type: "SET_START_DATE",
        startDate: startDate
    }
}

// set end date action generator
export function setEndDate(endDate){
    return {
        type: "SET_END_DATE",
        endDate: endDate
    }
}
