import { SagaIterator } from 'redux-saga';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { commentsAPI } from '../../api/JSONPlaceholderApi';
import { CommentType } from '../../types/types';
import { setAppStatusAC } from '../reducers/app-reducer';
import { setCommentsAC } from '../reducers/postsReducer';

export function* fetchCommentsWorkerSaga(
  action: ReturnType<typeof fetchCommentsSagaAC>,
): Generator<any, void, CommentType[]> {
  yield put(setAppStatusAC('loading'));
  yield delay(5000);
  const resData = yield call(commentsAPI.getComments, action.id);

  try {
    yield put(setCommentsAC(action.id, resData));
    yield put(setAppStatusAC('succeeded'));
  } catch (e: any) {
    console.log(e);
  }
}

export const fetchCommentsSagaAC = (id: string) =>
  ({ type: 'POSTS/FETCH-COMMENTS-SAGA-AC', id } as const);

export function* watchCommentsSaga(): SagaIterator {
  yield takeLatest('POSTS/FETCH-COMMENTS-SAGA-AC', fetchCommentsWorkerSaga);
}

export default function* rootCommentsSaga(): Generator<SagaIterator, void> {
  yield watchCommentsSaga();
}
