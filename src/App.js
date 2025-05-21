import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Card } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Application</Navbar.Brand>
      </Navbar>
      <Container className="mt-4">
        <h1>Bienvenue </h1>
        <Row className="gap-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Carte 1</Card.Title>
              <Card.Text>Contenu 1</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Carte 2</Card.Title>
              <Card.Text>Contenu 2</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Carte 3</Card.Title>
              <Card.Text>Contenu 3</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
