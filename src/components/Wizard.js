import React from 'react';
import { Grid, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import Menu from './Menu';

const Wizard = () =>
    <div>
        <Menu/>
        <div>
            <Jumbotron>
                <Grid>
                    <h1>Hello World</h1>
                </Grid>
            </Jumbotron>
        </div>
    </div>
export default Wizard;