import filtersReducer from '../../reducers/filters'
import moment from 'moment'

// the first thing we want to test is to make sure the default values are set up when the redux store first kicks off
// redux dispatches an action for that- @@INIT  we will dispatch this to test the defaults
// this is used internally by redux so we will never respond to this in our reducers or dispatch it in our actions
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})
// if we arent comparing objects, we can use toBe to make things more simple
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
// testing if we set sortBy to date is a little tricky since that is the default, so we set up a test state where amount is the default and use that to make sure the change happens
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text: text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('should set startdate filter', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(startDate)
})

test('should set enddate filter', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(endDate)
})