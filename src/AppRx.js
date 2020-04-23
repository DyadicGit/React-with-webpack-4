import React from 'react'
import { fetchUser } from './redux-rxjs/epic'
import { connect } from 'react-redux'

const AppRx = ({ dispatch, state }) => {
  const handleLoad = () => {
    dispatch(fetchUser('DyadicGit'))
  }
  return (
    <main>
      <div>Hello</div>
      <button onClick={handleLoad}>load users</button>
      <p>{JSON.stringify(state)}</p>
    </main>
  )
}

export default connect(
  state => ({ state }),
  dispatch => ({ dispatch })
)(AppRx)
