import axios from 'axios';

import { PostType, UserType, CommentType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const postAPI = {
  async getPosts(): Promise<PostType[]> {
    const res = await instance.get<PostType[]>('posts');

    return res.data;
  },
  async getPostsById(id: string): Promise<PostType[]> {
    const res = await instance.get<PostType[]>(`posts?userId=${id}`);

    return res.data;
  },
};
export const commentsAPI = {
  async getComments(id: string): Promise<CommentType[]> {
    const res = await instance.get<CommentType[]>(`comments?postId=${id}`);

    return res.data;
  },
};
export const usersAPI = {
  async getUserInfoById(id: string): Promise<UserType[]> {
    const res = await instance.get<UserType[]>(`users?id=${id}`);

    return res.data;
  },
};
