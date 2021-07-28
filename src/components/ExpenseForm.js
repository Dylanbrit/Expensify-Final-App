import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format('dddd'))

// We need to define our state in the constructor to access the props
// We want to set our properties equal to the existing value if one exists
// If it doesn't have a current property, we return an empty string
// This way, if there is existing data in the state, it will appear when we click on the expense we want to edit so the user can see what they previously entered
// To do this we use the ternary operator, and we can check the values of our properties using props.expense
// If there is nothing in the state, we set the properties equal to '', so that AddExpensePage isn't populated with data when the user wants to submit new data on a clean form
// If there is data in the state, the properties are set to the existing data, thanks to setting the value property of our inputs equal to the current state properties
// This is a little tricky, but to get access to existing props we need to use a constructor function to pass the state in
// We pass the props up to super and define state within the constructor
// Reminder on the ternary operator- syntax states '(if) ? (then) : (else)'
// We reformat amount and createdAt so that we can get the order of value we want
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.amount : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => {
            return {
                description: description
            }
        })
    }
    // regex101.com
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: amount
                }
            })
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => {
            return {
                note: note
            }
        })
    }
    onDateChange = (createdAt) => {
        this.setState(() => {
            return {
                createdAt: createdAt
            }
        })
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'Please provide description and amount'
                }
            })
        } else {
            this.setState(() => {
                return {
                    error: ''
                }
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} />
                    <textarea placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}