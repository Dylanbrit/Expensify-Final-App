import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

// for these tests, we need to pass in expenses and filters to get back the filtered expenses
// we can create universal test data to be used for all the tests, but we should create the filters inside the test function since they will be different for each test case
// for the filters, we can use the default filters for most of them so that no changes are made to the data that we dont want made
// we only need to add something new to the filter property we are testing to make sure it reflects in our assertion about the change
// keep in mind- the default sortBy is set to date, so if the results don't come back as intended, try sorting them by date in your assertion
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[1] ])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[0], expenses[1] ])
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
})