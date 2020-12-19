export default function totalExpenses(expenses){
    return expenses.reduce(function(acc, next){
        return acc += next.amount
    }, 0)
}