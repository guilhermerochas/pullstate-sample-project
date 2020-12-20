import "./App.css";
import "./AppController";
import { Jumbotron, Container, Navbar, Button } from "react-bootstrap";
import { AppController } from "./AppController";

function App() {
  const counter = AppController.useState((s) => s.counter);
  const colorToggler = AppController.useState((s) => s.colorToggler);

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand style={{ color: "white" }}>
          PullState Project
        </Navbar.Brand>
      </Navbar>
      <Container style={{ paddingTop: 20 }}>
        <Button
          onClick={() => {
            AppController.update((s) => {
              s.colorToggler = !s.colorToggler;
            });
          }}
          style={{ float: "right", margin: 10 }}
        >
          Change Text
        </Button>
        <Jumbotron style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: 20 }}>
            {colorToggler === true
              ? "The Button Changed the text"
              : "Simple PullState Project"}
          </h1>
          <h3>Testing state management with pullstate library</h3>
        </Jumbotron>
      </Container>
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <h2>Counter: {counter}</h2>
        <Button
          style={{ marginRight: 20 }}
          onClick={() => {
            AppController.update((s) => {
              s.counter = s.counter + 1;
            });
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            AppController.update((s) => {
              s.counter = s.counter - 1;
            });
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default App;
