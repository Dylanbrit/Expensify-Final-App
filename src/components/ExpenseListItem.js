import React from 'react'
import { Link } from 'react-router-dom'

// We destructure our argument to accept the individual things off the props we want
// The props include dispatch already, so we can access that to dispatch our actions
const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={`edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
            <p>{props.expense.amount} - {props.expense.createdAt}</p>
        </div>
    )
}

// By setting our "to" property inside of Link equal to a JavaScript expression, I can inject a template string to dynamically enter the id
// When we click on the description we want to edit, it takes us to the edit page for the specific id we are working on
// We have the id, but we want to access the entire expense object, so we need to connect the component to the redux store using connect() inside EditExpensePage

export default ExpenseListItem