import { combineReducers } from 'redux';

import { appReducer } from './app-reducer';
import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  users: usersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
