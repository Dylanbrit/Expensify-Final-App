import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

// Store creation
// combineReducers takes an argument, and it is going to be key/value pairs
// The key will be the root state name- expenses and filters- and the value will be the reducer that will manage that- expensesReducer and filtersReducer

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    return store
}