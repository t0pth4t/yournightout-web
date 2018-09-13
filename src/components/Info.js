import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Jumbotron, Button} from 'react-bootstrap';

const Info = () =>
    <div>
        <Jumbotron>
            <Grid>
            <h1>(Y)our night out!</h1>
            <p>
                Ever had a night free but no idea what to do? (Y)our night out can help. Just answer a few simple questions and (Y)our night out will generate a night out!
            </p>
            <p>
                <Link className="btn btn-large btn-primary" to='/when'>Get Started!</Link>
            </p>
            </Grid>
        </Jumbotron>
        
    </div>


export default Info;