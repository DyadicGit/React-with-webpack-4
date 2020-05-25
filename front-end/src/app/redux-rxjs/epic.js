import { ajax } from 'rxjs/ajax'
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable'

// action creators
export const fetchUser = username => ({ type: 'FETCH_USER', payload: username })
const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload })

// epic
export const fetchUserEpic = action$ =>
  action$.pipe(
    ofType('FETCH_USER'),
    mergeMap(action =>
      ajax.getJSON(`https://02c2c8b2-89d2-4cc8-8866-28ce2cf928da.mock.pstmn.io/users/${action.payload}`)
        .pipe(
          map(response => fetchUserFulfilled(response)))
    )
  )
