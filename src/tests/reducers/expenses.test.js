import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

// our default state for expenses is just an empty array
test('should set default state', () => {
    const action = expensesReducer(undefined, { type: '@@INIT' })
    expect(action).toEqual([])
})

// to test our reducer, we need to provide a state and an action
// we have dummy data saved as under expenses that we will use as the state, and we will generate an action ourselves, then we will pass both in to expensesReducer
// instead of just calling the id, which could lead to user error if i enter it wrong, we are going to call the id directly from the dummy data using expenses[?].id
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([expenses[0], expenses[2]])
})

test('should note remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        description: 'beer',
        note: 'for drinking',
        amount: 15000,
        createdAt: 5000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const description = 'capital one'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    }
    const result = expensesReducer(expenses, action)
    expect(result[2].description).toEqual(description)
})

test('should not edit an expense if id not found', () => {
    const description = 'capital one'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-2',
        updates: {
            description
        }
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual(expenses)
})