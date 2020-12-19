import moment from "moment";

// a function just to arrange and show the expenses based on the current filters applied.
function getVisibleExpenses(expenses, filters){
    return expenses.filter((expense) => {
        var textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

        var startDateMatch = filters.startDate ? moment(expense.createdAt).isSameOrAfter(filters.startDate, 'day') : true;
    

        var endDateMatch = filters.endDate ? moment(expense.createdAt).isSameOrBefore(filters.endDate, 'day') : true;

        return textMatch && startDateMatch && endDateMatch; 
    }).sort((a, b) => {
        if(filters.sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(filters.sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    })
};

export default getVisibleExpenses;





// function getVisibleExpenses(expenses, filters){
//     return expenses.filter((expense) => {
//         var textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
//         var startDateMatch;
//         if(typeof expense.startDate === "number" && typeof filters.startDate === "number"){
//             startDateMatch = expense.startDate >= filters.startDate;
//         }else{
//             startDateMatch = true
//         }

//         var endDateMatch;
//         if(typeof expense.endDate === "number" && typeof filters.endDate === "number"){
//           endDateMatch = expense.endDate <= filters.endDate;
//       }else{
//           endDateMatch = true
//       }

//         return textMatch && startDateMatch && endDateMatch; 
//     }).sort((a, b) => {
//         if(filters.sortBy === "date"){
//             return a.createdAt < b.createdAt ? 1 : -1
//         }else if(filters.sortBy === "amount"){
//             return a.amount < b.amount ? 1 : -1
//         }
//     })
// };
