import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
)

export default NotFoundPage

// We use Link, which is provided to us via React Router DOM, to send us anywhere in our app without doing a full page refresh
// This gives us the ability to use client-side routing as opposed to server-side routing
// Instead of running to the server to find the home page, Link lets us just run our component set up to go to one of our pages
// For external links to other sites we could use an <a> tag instead of link, since we cant use client-side routing outside our site
// Navlink lets us customize our links a bit more, such as styling the link that is clicked on in a dashboard