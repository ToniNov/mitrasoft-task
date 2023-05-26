import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';

import { selectLoading } from '../app/reducers/selectors';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { useAppSelector } from '../hooks';

import { LadingLine } from './GrowSpinner';

export const Header = () => {
  const isLoading = useAppSelector(selectLoading);

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
      {isLoading === 'loading' && <LadingLine />}
      <Outlet />
    </>
  );
};
