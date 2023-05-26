import { FC, useEffect } from 'react';

import { Card, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { selectUser } from '../app/reducers/selectors';
import { fetchUserSagaAC } from '../app/sagas/user';
import { useAppDispatch, useAppSelector } from '../hooks';

import { BaseAvatar } from './BaseAvatar';
import { BaseButton } from './BaseButton';

type PropsType = {
  id?: string;
};
export const UserCard: FC<PropsType> = ({ id }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!id) return;

    dispatch(fetchUserSagaAC(id));
  }, [id]);

  return (
    <Row className="d-flex justify-content-center ">
      {user.map((item) => {
        return (
          <Card className="w-80 mt-4 pb-2" key={item.id}>
            <Card.Body>
              <div className="d-flex justify-content-start">
                <BaseAvatar width="120px" height="120px" />
                <Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item> Full Name: {item.name}</ListGroup.Item>
                    <ListGroup.Item> User Name: {item.username}</ListGroup.Item>
                    <ListGroup.Item> Email: {item.email}</ListGroup.Item>
                  </ListGroup>
                </Card.Title>
              </div>
              <Card.Text>
                <ListGroup horizontal>
                  <ListGroup.Item> Street: {item.address.street} </ListGroup.Item>
                  <ListGroup.Item> Suite: {item.address.suite}</ListGroup.Item>
                  <ListGroup.Item> City: {item.address.city}</ListGroup.Item>
                  <ListGroup.Item> Zipcode: {item.address.zipcode}</ListGroup.Item>
                  <ListGroup.Item>
                    Address GEO: {item.address.geo.lat} | {item.address.geo.lng}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Link to="/">
                <BaseButton variant="custom">Go Back</BaseButton>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  );
};
