import { CommentType, PostType, UserType } from '../../types/types';
import { RootStateType } from '../store';

import { RequestStatusType } from './app-reducer';

export const selectPosts = (state: RootStateType): PostType[] => state.posts.posts;
export const selectComments = (state: RootStateType): CommentType[] =>
  state.posts.comments;
export const selectLoading = (state: RootStateType): RequestStatusType =>
  state.app.status;
export const selectUser = (state: RootStateType): UserType[] => state.users.users;
