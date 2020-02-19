import { put, takeLatest, take, cancel, cancelled } from 'redux-saga/effects';
import { CancelToken } from 'axios';

import { http } from '../../../utils';
import {
  COUNTRIES_REQUEST, COUNTRIES_REQUEST_SUCCESS, COUNTRIES_REQUEST_CANCEL, COUNTRIES_REQUEST_CANCELED
} from './types';

export function* fetchCountries({ search } = {}) {
  const source = CancelToken.source();

  try {
    const params = { search };
    const results = yield http.get('planets/', { params, cancelToken: source.token });

    yield put({ type: COUNTRIES_REQUEST_SUCCESS, list: results.data.results })
  } finally {
    if(yield cancelled()) {
      source.cancel('Cancelled');
      yield put({ type: COUNTRIES_REQUEST_CANCELED });
    }
  }
}

function* actionWatcher() {
  while(true) {
    const task = yield takeLatest(COUNTRIES_REQUEST, fetchCountries);

    yield take(COUNTRIES_REQUEST_CANCEL);
    yield cancel(task);
  }
}

export default function* rootSaga() {
  yield actionWatcher();
}
