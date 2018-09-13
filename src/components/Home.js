import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';

const Home = () => {
  
    return (
      <div>

        <Jumbotron>
          <Grid>
            <h1>(Y)our night out</h1>
            <p>
              <ButtonToolbar>
                <Link className="btn btn-lg btn-success" to="/wizard">Get Started</Link>
                <Link className="btn btn-lg btn-info" to="/info">What is this?</Link>
              </ButtonToolbar>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
}


export default Home;