import { call, put, takeEvery } from  'redux-saga/effects'
import { hideLoader, showLoader,showAlert } from './actions'
import { FETCHED_POST, REQUEST_POSTS } from './types.js'



function*  sagaWorker() {
   try {
      yield put(showLoader())
      const payload = yield call(fetchData)
      yield put({ type: FETCHED_POST, payload })
      yield put(hideLoader())
   } catch (e) {
      yield put(showAlert(e.message))
      yield put(hideLoader())
   }
}

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      return await response.json() 
}

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

