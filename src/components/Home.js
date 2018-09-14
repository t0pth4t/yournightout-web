import React from 'react';
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  
    return (
      <div>

        <Jumbotron>
            <h1>(Y)our night out</h1>
            <p>
            Ever had a night free but no idea what to do? (Y)our night out can help. Just answer a few simple questions and (Y)our night out will generate a night out!
            </p>
            <Link to="/when"><Button outline color="primary">Get Started</Button>{' '}</Link>
            <Link to="/info"><Button outline color="secondary">FAQ</Button>{' '}</Link>
        </Jumbotron>
      </div>
    );
}


export default Home;