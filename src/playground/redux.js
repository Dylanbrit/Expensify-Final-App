import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count: count
    }
}

const reset = () => {
    return {
        type: 'RESET'
    }
}

// Reducers are pure functions- the output is only determined by the input, not any outside things that aren't passed out
// Never change state or action- they are passed into our reducer but we do not want to reassign their values
// Instead we just read off of both of those things and return an object that represents the new state

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
} 

const store = createStore(countReducer)

const unsub = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(reset())

store.dispatch(incrementCount())

store.dispatch(incrementCount({ incrementBy: 2 }))

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 3 }))

store.dispatch(setCount({ count: 101 }))