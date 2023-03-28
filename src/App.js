import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <>
    <div id='navbar'>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">American actors</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Films</Nav.Link>
            <NavDropdown title="Actors" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Male</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Female
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Films makers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div id='cards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.amomama.com/7429c8fa96ffd8906341be3bf4a7298d2968141548880900.jpg" />
      <Card.Body>
        <Card.Title>Denzel Washington</Card.Title>
        <Card.Text>
        Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor and filmmaker
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.amomama.com/7429c8fa96ffd8906341be3bf4a7298d2968141548880900.jpg" />
      <Card.Body>
        <Card.Title>Denzel Washington</Card.Title>
        <Card.Text>
        Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor and filmmaker
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.amomama.com/7429c8fa96ffd8906341be3bf4a7298d2968141548880900.jpg" />
      <Card.Body>
        <Card.Title>Denzel Washington</Card.Title>
        <Card.Text>
        Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor and filmmaker
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default App;
