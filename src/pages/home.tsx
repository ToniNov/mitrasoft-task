import { FC } from 'react';

import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { PostCard } from '../components/PostCard';

export const Home: FC = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <PostCard />
      </Row>
    </Container>
  );
};
