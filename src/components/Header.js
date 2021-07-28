import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Add Expense</NavLink>
    </header>
)

export default Header

// We use Link, which is provided to us via React Router DOM, to send us anywhere in our app without doing a full page refresh
// This gives us the ability to use client-side routing as opposed to server-side routing
// Instead of running to the server to find the home page, Link lets us just run our component set up to go to one of our pages
// For external links to other sites we could use an <a> tag instead of link, since we cant use client-side routing outside our site
// Navlink lets us customize our links a bit more, such as styling the link that is clicked on in a dashboard