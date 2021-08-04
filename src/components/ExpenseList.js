import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// This file will be where we create a stateless functional component
// We use the connect funciton in each of our individual components
// We use map to separate each individual expense, then return the expense as a prop that can be passed to ExpenseListItem
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem expense={expense} key={expense.description} />
        })}
    </div>
)

// This function maps the store state to the component props
const mapStateToProps = (state) => {
    console.log(state)
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// This will be our HOC
// We set a component equal to connect()()
// We pass ExpenseList into the second set of ()
// In the first set of () we provide the information about what we want to connect from the store
// We define a function that lets us determine what info from the store we want our component to access
// The store's state gets passed in as the first argument
// We return an object of key/value pairs
// Now the ExpenseList will have access to the info we pass in
// It's common practice to 
export default connect(mapStateToProps)(ExpenseList)

// When you connect a Component to the redux store it is reactive, so as the store changes the component gets rerendered with the new values