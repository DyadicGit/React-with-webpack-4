import React from 'react'
import { ajax } from 'rxjs/ajax'
import { connectConsumer } from './redux-vanilla/hook-redux'

const fetchUser = (dispatch, username) => {
  dispatch({ type: 'FETCH_USER' })
  ajax.getJSON(`https://02c2c8b2-89d2-4cc8-8866-28ce2cf928da.mock.pstmn.io/users/${username}`)
    .subscribe(result => dispatch({ type: 'FETCH_USER_FULFILLED', payload: result }))
}

const App = ({ dispatch, state }) => {
  // const { dispatch, state } = useContext(storeVanilla) //Or like this without using connect
  const handleLoad = () => fetchUser(dispatch, 'DyadicGit')
  return (
    <main>
      <div>Hello</div>
      <button onClick={handleLoad}>load users</button>
      <p>{JSON.stringify(state)}</p>
    </main>
  )
}
export default connectConsumer(App)
