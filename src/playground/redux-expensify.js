import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Expenses Reducer
// This reducer will handle our expenses array in the redux store
// We take in our state and action and return the new state
// Our default state value is going to be an empty array, since the expenses are an array
// Instead of directly setting the default array in the argument of our expensesReducer, we break it out into a new variable
// This makes it easier to manage, since it isn't just an array, it is an array with an object that has multiple properties to keep track of

// We downloaded and imported the uuid library to generate our unique id for each expense
// We just set the id property to uuid(), calling the function to run for each expense added
// The other properties come from user interaction
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    }
}

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: id
        }
    }
}

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
}

const expenseReducerDefaultState = []

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [    
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((item) => {
                return action.expense.id !== item.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const setTextFilter = (text) => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate

        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation
// combineReducers takes an argument, and it is going to be key/value pairs
// The key will be the root state name- expenses and filters- and the value will be the reducer that will manage that- expensesReducer and filtersReducer

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// We can get information back from our dispatch calls by saving it to a variable
// Our action object is returned from store.dispatch
// This means if we wanted the id for our first expense, we could set it equal to a variable called expenseOne and accessing it from expenseOne.expense.id

const expenseOne = store.dispatch(addExpense({ description: 'rent', note: 'for rent', amount: 95, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', note: 'for coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('Re'))
// store.dispatch(setTextFilter(''))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(-1250))
// store.dispatch(setStartDate()) // undefined
// store.dispatch(setEndDate(1250))

// console.log(expenseOne)

// We are going to combine our two separate properties on teh demoState into one
// We will use two separate reducers for each, so that we can break it up into more manageable code
// There will be a reducer for the expenses array that ignores the filters object and one for the filters object that ignores the expenses array

const demoState = {
    expenses: [{
        id: 'sdofb',
        description: 'Rent',
        note: 'This is rent for March',
        amount: 95000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// ES6 Spread Operator
// const user = {
//     name: 'Dylan',
//     age: 31
// }

// console.log({
//     ...user,
//     location: 'Miami',
//     age: 32
// })