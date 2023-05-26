import { FC } from 'react';

import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

import { PostCard } from '../components/PostCard';
import { UserCard } from '../components/UserCard';

export const UserPage: FC = () => {
  const { id } = useParams();

  return (
    <Container>
      <UserCard id={id} />
      <PostCard id={id} />
    </Container>
  );
};
