import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>    
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }} />   
    </div>
)

// We passed the data out of ExpenseForm by calling a prop that gets passed in from the parent
// When the user submits their info, dispatch is called from the props to execute our addExpense function that we imported
// The expense object is passed in- we get this from our onSubmit method inside of the ExpenseForm, where we pass in an object with all of our properties
// The store is updated with the info that came from our EpenseForm local state, and the user is redirected to the home page

export default connect()(AddExpensePage)