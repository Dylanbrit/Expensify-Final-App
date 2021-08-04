import moment from 'moment'

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        // const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        // const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true

        return textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses

// return textMatch && startDateMatch && endDateMatch
// find out why startDateMatch and endDateMatch are filtering out all expenses
// ever since i changed those two variables i have not been able to see new expenses when i add them