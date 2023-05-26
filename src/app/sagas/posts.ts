import { SagaIterator } from 'redux-saga';
import { call, delay, put, takeEvery } from 'redux-saga/effects';

import { postAPI } from '../../api/JSONPlaceholderApi';
import { PostType } from '../../types/types';
import { setAppStatusAC } from '../reducers/app-reducer';
import { setPostsAC } from '../reducers/postsReducer';

export function* fetchPostsWorkerSaga(): Generator<any, void, PostType[]> {
  yield put(setAppStatusAC('loading'));
  yield delay(5000);
  const resData = yield call(postAPI.getPosts);

  try {
    yield put(setPostsAC(resData));
    yield put(setAppStatusAC('succeeded'));
  } catch (e: any) {
    console.log(e);
  }
}
export const fetchPostsSagaAC = () => ({ type: 'POSTS/FETCH-POSTS-SAGA-AC' } as const);

export function* fetchPostsByIdWorkerSaga(
  action: ReturnType<typeof fetchPostsByIdSagaAC>,
): Generator<any, void, PostType[]> {
  yield put(setAppStatusAC('loading'));
  yield delay(5000);
  const resData = yield call(postAPI.getPostsById, action.id);

  try {
    yield put(setPostsAC(resData));
    yield put(setAppStatusAC('succeeded'));
  } catch (e: any) {
    console.log(e);
  }
}
export const fetchPostsByIdSagaAC = (id: string) =>
  ({ type: 'POSTS/FETCH-POSTS-BY-ID-SAGA-AC', id } as const);

export function* postsWatcherSaga(): SagaIterator {
  yield takeEvery('POSTS/FETCH-POSTS-SAGA-AC', fetchPostsWorkerSaga);
  yield takeEvery('POSTS/FETCH-POSTS-BY-ID-SAGA-AC', fetchPostsByIdWorkerSaga);
}

export default function* rootPostsSaga(): Generator<SagaIterator, void> {
  yield postsWatcherSaga();
}
