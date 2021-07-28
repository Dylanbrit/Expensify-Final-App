import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter

// When React Router finds a matching route it renders an instance of that component
// It also passes a few props down
// In our props object, our first props is history- an object full of methods that let us manipulate history
// In History, we can redirect users. For example, when a form is submitted we want them redirected to the dashboard, we can do that using history
// Then we have match- in here is params, which contains info about why the current match is considered a match
// Then location, which contains info about the current URL, and can help us filter
// Using location, we can access our individual items that we want to edit
// In our edit path, for example, we can follow up /edit with /:id, and if we go to edit/99, we will get to the edit page
// In addition, our params and location will reflect 99

// We use the exact prop inside our Route components because when it is set to true, it only shows that component when the URL is an exact match
// If not set to true, it will show any component that matches the first character, which is /
// All of our URL's will start with /, which means that the default setting would just show every component on every page, which is not desirable

// When React Router sees Switch, it's going to move through our route definitions in order and stop when it finds a match, so it wont check any others
// This makes it so that 404 does not appear on any page that is a match- as it is set up, 404 will appear on every page since no path was given
// All we have to do is import Switch and replace the div inside BrowserRouter with an opening and closing Switch
// Switch is provided to us through React Router DOM