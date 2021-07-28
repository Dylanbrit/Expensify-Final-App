import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

// When we call an action generator, we can expect its result to look like the inside of an action generator
// What does the inside of an action generator look like?
// It has the type, equal to ADD_EXPENSE or something similar, as well as the data passed in

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense actio object', () => {
    const action = editExpense('123abc', { note: 'new note value' })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
})

test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 1090,
        createdAt: 1000,
        note: 'this is rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        }
    })
})