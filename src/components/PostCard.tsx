import { FC, useEffect, useState } from 'react';

import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { selectComments, selectPosts } from '../app/reducers/selectors';
import { fetchCommentsSagaAC } from '../app/sagas/comments';
import { fetchPostsByIdSagaAC, fetchPostsSagaAC } from '../app/sagas/posts';
import { useAppDispatch, useAppSelector } from '../hooks';

import { BaseAvatar } from './BaseAvatar';
import { BaseButton } from './BaseButton';
import { CommentList } from './CommemtList';

type PropsType = {
  id?: string;
};
export const PostCard: FC<PropsType> = ({ id }) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const comments = useAppSelector(selectComments);
  const [shouldShow, setShow] = useState<boolean>(false);

  const fetchPosts = (id?: string) => {
    if (id) {
      dispatch(fetchPostsByIdSagaAC(id));
    } else {
      dispatch(fetchPostsSagaAC());
    }
  };

  useEffect(() => {
    fetchPosts(id);
  }, [id]);
  const handlerShowComments = (id: number): void => {
    setShow(!shouldShow);
    dispatch(fetchCommentsSagaAC(`${id}`));
  };

  return (
    <Row className="d-flex justify-content-center ">
      {posts.map((itemPost) => {
        return (
          <Card className="w-80 mt-4 pb-2" key={itemPost.id}>
            <Card.Body>
              <div className="d-flex justify-content-start">
                <Link to={`/user/${itemPost.userId}`}>
                  <BaseAvatar width="40px" height="40px" />
                </Link>
                <Card.Title className="fs-3">{itemPost.title}</Card.Title>
              </div>

              <Card.Text>{itemPost.body}</Card.Text>
            </Card.Body>

            <BaseButton
              className="w-25"
              variant="custom"
              onClick={() => handlerShowComments(itemPost.id)}
            >
              Comments
            </BaseButton>

            <CommentList
              shouldShow={shouldShow}
              comments={comments}
              itemPostId={itemPost.id}
            />
          </Card>
        );
      })}
    </Row>
  );
};
