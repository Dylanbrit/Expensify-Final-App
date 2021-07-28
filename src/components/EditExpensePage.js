import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

// We want to render ExpenseForm inside the EditExpensePage because we want the user to see the same form that they saw for AddExpensePage so they can edit the fields they want to change
// We set up an onSubmit prop for ExpenseForm so that we can use a function to dispatch the editExpense action
// We pass down onSubmit because we don't want 
// We want the form to populate with the existing data the user already entered, and to do that we need to create an expense prop and pass the data down
// The data we pass down comes from the props argument, which has access to the current redux store thanks to mapStateToProps
// Also, thanks to mapStateToProps, we have access to the individual expense we want to edit since we used the find method to return a new expense property
// Now the ExpenseForm has access to these props- expense(contains the matching expense so we are populating the correct data) and onSubmit(dispatches the action to edit the expense when the user submits valid data)
// We can access our dispatches through the props that connect us to the redux store- very handy!
// editExpense requires the 
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/')
            }} />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

// We use the find method to search the expenses array for an expense item whose id matches props.match.params.id
// We store it on a new expense property that will be stored in props, so that when we try to access it inside our ExpenseForm props, we just need to call props.expense
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

// Inside mapStateToProps we cna access the state because that's where the expense object lives
// We are searching the expenses array for an expense whose id matches props.match.params.id, accessing it through props as the second argument
// We can access the current props passed into the HOC
// React router renders our HOC, the HOC passes the props through and lets us pass in new ones
// Now the actual expense is available to us, so we can render ExpenseForm in the EditExpensePage
// We create an expense property to pass down that holds all of our expense object data
// mapStateToProps gives EditExpensePage, and by relation ExpenseForm, access to our expense array

export default connect(mapStateToProps)(EditExpensePage)