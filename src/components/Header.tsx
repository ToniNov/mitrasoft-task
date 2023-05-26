import { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';

import { setAppStatusAC } from '../app/reducers/app-reducer';
import { selectLoading } from '../app/reducers/selectors';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../hooks';

import { BaseLineSpinner } from './BaseLineSpinner';
import { BaseSpinner } from './BaseSpinner';

export const Header = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const isInitialized = useAppSelector(selectLoading);

  useEffect(() => {
    if (isInitialized === 'idle') {
      const timeoutId = setTimeout(() => {
        dispatch(setAppStatusAC('succeeded'));
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, isInitialized]);

  if (isInitialized === 'idle') {
    return <BaseSpinner />;
  }

  return (
    <>
      <Navbar key="false" bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="Navbar-expand" />
          <Navbar.Offcanvas
            id="Navbar-expand"
            aria-labelledby="NavbarLabel-expand"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="NavbarLabel-expand">
                <Logo />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  <h3>Posts list</h3>
                </Nav.Link>
                <Nav.Link as={Link} to="me">
                  <h3>About me</h3>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {isLoading === 'loading' && <BaseLineSpinner variant="custom" />}
      <Outlet />
    </>
  );
};
