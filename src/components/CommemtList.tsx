import { FC } from 'react';

import { ListGroup } from 'react-bootstrap';

import { CommentType } from '../types/types';

type Props = {
  shouldShow: boolean;
  comments: CommentType[];
  itemPostId: number;
};

export const CommentList: FC<Props> = ({ shouldShow, comments, itemPostId }) => {
  if (!shouldShow) {
    return null;
  }

  return (
    <>
      {comments
        .filter((item) => item.postId === itemPostId)
        .map((item) => (
          <ListGroup key={item.id} className="mt-3">
            <ListGroup.Item>
              <span className="fs-6">{item.email}</span>
              <p>{item.body}</p>
            </ListGroup.Item>
          </ListGroup>
        ))}
    </>
  );
};
