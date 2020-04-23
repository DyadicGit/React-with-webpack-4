import React, { createContext, useReducer } from 'react'

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload,
        loading: false
      }
    case 'FETCH_USER':
      return { ...state, loading: true }
    default:
      return state
  }
}

const initialState = {}
const storeVanilla = createContext(initialState)
const { Provider } = storeVanilla

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

const connectConsumer = Component => {
  const { Consumer } = storeVanilla
  return () => (
    <Consumer>
      {({ state, dispatch }) => <Component {...Component.props} state={state} dispatch={dispatch} />}
    </Consumer>
  )
}
export { storeVanilla, StateProvider, connectConsumer }
