import database from "../firebase";


// add expense action generator
function addExpense(addExpenseObj){
    return {
        type: "ADD_EXPENSE",
        expense: addExpenseObj
    }
}

// remove expense action generator
function removeExpense(payload){
    return {
        type: "REMOVE_EXPENSE",
        id: payload.id
    }
}

// edit expense action generator
function editExpense(id, updates){
    return {
        type: "EDIT_EXPENSE",
        id: id,
        updates: {...updates, amount: Number(updates.amount)}
    }
}


export function asyncAddExpense(addExpenseObj){
    return (dispatch, getState) => {
        var expense = {
            description: addExpenseObj.description,
            note: addExpenseObj.note || "",
            amount: Number(addExpenseObj.amount),
            createdAt: addExpenseObj.createdAt
        }
        database.ref(`users/${getState().user.uid}/expenses`).push(expense).then(function(snapshot){
            dispatch(addExpense({...expense, id: snapshot.key}));
        })
    }
}

function setExpenses(expenses){
    return {
       type: "SET_EXPENSES",
       expenses: expenses
    }
}


export function asyncSetExpenses(){
    return (dispatch, getState) => {
         return database.ref(`users/${getState().user.uid}/expenses`).once("value")
            .then(function(snapshot){
              var expenses = [];

              snapshot.forEach(function(childSnapshot){
                  expenses.push({id: childSnapshot.key, ...childSnapshot.val()})
              })

              dispatch(setExpenses(expenses));
            })
    }
}

export function asyncRemoveExpense(payload){
            return (dispatch, getState) => {
                return database.ref(`users/${getState().user.uid}/expenses/${payload.id}`).remove()
                  .then(function(){
                       dispatch(removeExpense(payload));
                  })
            }
}

export function asyncEditExpense(id, updates){
        return (dispatch, getState) => {
            return database.ref(`users/${getState().user.uid}/expenses/${id}`).update({
                ...updates, amount: Number(updates.amount)
            }).then(function(){
                dispatch(editExpense(id, updates));
            })
        }
}

// ============================================================================================================

// action generators always have to return an object containing type property
// that gets dispatched to update the store in some way
// But some times we may have to do some other task when updating store like make ajax request
// basic pattern to call/dispatch (async) function inside dispatch()
// this function returns another function with dispatch as argument which in turn dispatches the original action generator.
// this is possible only if we use middleware like redux-thunk