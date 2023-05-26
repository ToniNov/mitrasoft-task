import { SagaIterator } from 'redux-saga';
import { call, delay, put, takeEvery } from 'redux-saga/effects';

import { usersAPI } from '../../api/JSONPlaceholderApi';
import { UserType } from '../../types/types';
import { setAppStatusAC } from '../reducers/app-reducer';
import { setUserAC } from '../reducers/usersReducer';

export function* fetchUsersWorkerSaga(
  action: ReturnType<typeof fetchUserSagaAC>,
): Generator<any, void, UserType[]> {
  yield put(setAppStatusAC('loading'));
  yield delay(5000);
  const resData = yield call(usersAPI.getUserInfoById, action.id);

  try {
    yield put(setUserAC(resData));
    yield put(setAppStatusAC('succeeded'));
  } catch (err: any) {
    console.log(err);
  }
}

export const fetchUserSagaAC = (id: string) =>
  ({ type: 'POSTS/FETCH-USER-SAGA-AC', id } as const);

export function* watchUsersSaga(): SagaIterator {
  yield takeEvery('POSTS/FETCH-USER-SAGA-AC', fetchUsersWorkerSaga);
}

export default function* rootUsersSaga(): Generator<SagaIterator, void> {
  yield watchUsersSaga();
}
