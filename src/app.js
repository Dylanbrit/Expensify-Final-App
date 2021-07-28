import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
// import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 50 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 10000 }))
store.dispatch(addExpense({ description: 'rent', amount: 95000, createdAt: 1000 }))
// store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'))
// }, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// We set up a jsx variable that contains our Provider, and inside the Provider is our AppRouter which ties everything together
// The one prop that is required for Provider is store, which contains our store

const app = document.querySelector('#app')
ReactDOM.render(jsx, app)

// We import the Provider component and the connect() function
// We use Provider once, and connect() for every single component that needs to connect to the redux store