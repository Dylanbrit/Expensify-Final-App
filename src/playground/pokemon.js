import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addPokemon = ({ name = 'Anonymous', level = 1, capturedAt = 1 } = {}) => {
    return {
        type: 'ADD_POKEMON',
        pokemon: {
            name: name,
            level: level,
            capturedAt: capturedAt
        }
    }
}

const removePokemon = () => {

}

const editPokemon = () => {

}

const pokemonReducerDefaultState = []

const pokemonReducer = (state = pokemonReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_POKEMON':
            return [
                ...state,
                action.pokemon
            ]
        default:
            return state
    }
}

const setTextFilter = (text) => {
    return {
        type: 'SORT_BY_TEXT',
        text: text
    }
}

const filtersReducerDefaultState = { text: '', sortBy: 'startDate' }

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY_TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

const getVisiblePokemon = (pokemon, { text, sortBy }) => {
    return pokemon.filter((individualPokemon) => {
        return individualPokemon.name.toLowerCase().includes(text.toLowerCase())
    })
}

const store = createStore(
    combineReducers({
        pokemon: pokemonReducer,
        filters: filtersReducer
}))

store.dispatch(addPokemon({ name: 'Pikachu', level: 5, capturedAt: 1 }))
store.dispatch(addPokemon({ name: 'Bulbasaur', level: 5, capturedAt: 3 }))
store.dispatch(addPokemon({ name: 'Charmander', level: 5, capturedAt: 4 }))
store.dispatch(addPokemon({ name: 'Squirtle', level: 5, capturedAt: 5 }))
store.dispatch(addPokemon({ name: 'Pidgeotto', level: 15, capturedAt: 7 }))
store.dispatch(addPokemon({ name: 'Krabby', level: 14, capturedAt: 9 }))
store.dispatch(setTextFilter('k'))

const state = store.getState()
const visiblePokemon = getVisiblePokemon(state.pokemon, state.filters)
console.log(visiblePokemon)

const demoState = {
    pokemon: {
        name: '',
        level: 5,
        capturedAt: 1
    },
    filters: {
        text: '',
        sortBy: 'startDate'
    }
}