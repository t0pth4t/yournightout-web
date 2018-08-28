import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">(Y)our night out</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>(Y)our night out</h1>
            <p>
              <ButtonToolbar>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                Get Started
              </Button>
              <Button
                bsStyle="info"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                What is this?
              </Button>
              </ButtonToolbar>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;