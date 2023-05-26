import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import rootCommentsSaga from './comments';
import rootPostsSaga from './posts';
import rootUsersSaga from './user';

export default function* rootSaga(): SagaIterator {
  yield all([fork(rootUsersSaga), fork(rootPostsSaga), fork(rootCommentsSaga)]);
}
