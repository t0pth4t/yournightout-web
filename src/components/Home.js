import React from 'react';
import { Grid, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';

const Home = () => {
  
    return (
      <div>

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


export default Home;