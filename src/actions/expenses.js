import uuid from 'uuid'

// We downloaded and imported the uuid library to generate our unique id for each expense
// We just set the id property to uuid(), calling the function to run for each expense added
// The other properties come from user interaction

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
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

// export const removeExpense = ({ id } = {}) => {
//     return {
//         type: 'REMOVE_EXPENSE',
//         expense: {
//             id: id
//         }
//     }
// }

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
}