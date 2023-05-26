import { CommentType, PostType } from '../../types/types';

export type PostsDomainType = {
  posts: PostType[];
  comments: CommentType[];
};

const initialState: PostsDomainType = {
  posts: [],
  comments: [],
};

export const postsReducer = (
  state = initialState,
  action: ActionsTypePosts,
): PostsDomainType => {
  switch (action.type) {
    case 'POST/SET-POSTS':
      return {
        ...state,
        posts: action.posts,
      };
    case 'POST/SET-COMMENTS':
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return { ...state };
  }
};

export const setPostsAC = (posts: PostType[]) =>
  ({ type: 'POST/SET-POSTS', posts } as const);
export const setCommentsAC = (id: string, comments: CommentType[]) =>
  ({ type: 'POST/SET-COMMENTS', id, comments } as const);

export type ActionsTypePosts = SetPostsActionType | SetCommentsActionType;

export type SetPostsActionType = ReturnType<typeof setPostsAC>;
export type SetCommentsActionType = ReturnType<typeof setCommentsAC>;
