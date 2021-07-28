// A higher order component (HOC) is a component (higher order) that renders another component (regular component)
// An HOC is used to reuse code and rerender existing components that produce actual JSX
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

// Below is a basic component we put together to illustrate the concept of HOC
// Info is a regular component, not an HOC

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    )
}
 
// To start, we set up a function, it is a regular function NOT a React Component
// We are going to get something back from withAdminWarning, and what we get back is an alternative version of the Info component, it will be the HOC
// It's a common practice to use WrappedComponent as the name for the argument for our function
// INside the function is where we return our new component, and this is the HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private information. Please do not share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please log in to see this information</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthenticationInfo = withAuthentication(Info)

const app = document.querySelector('#app')
ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, app)
ReactDOM.render(<AuthenticationInfo isAuth={false}     info="these are the details" />, app)