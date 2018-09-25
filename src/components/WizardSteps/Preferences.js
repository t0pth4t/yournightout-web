import React from 'react';
import { Container, Row, Button, Form, FormGroup, Col } from 'reactstrap';


export default class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preferences: []
    }
    this.addPreference = this.addPreference.bind(this);
  }

  addPreference(preference) {
    this.setState(state => ({preferences:  state.preferences.includes(preference) ? state.preferences : state.preferences.concat(preference)}));
  }
 
  render() {
    const {preferences} = this.state;
    const prefs = preferences.map(pref=> 
      <span>{pref} </span>);
    return (
      <Container>
        <Row>
          <h1>Choose some things that interest you...</h1>
          </Row>
          <Row>
            <Col>
          <h3 className="text-muted">{prefs}</h3>
          </Col>
          </Row>
          
          <Row>
          <Form>
            <FormGroup>
            <Button onClick={()=>this.addPreference('drinking')} color="success" size="lg">Drinking</Button>{' '}
            <Button onClick={()=>this.addPreference('coffee')} color="info" size="lg">Coffee</Button>{' '}
            <Button onClick={()=>this.addPreference('dinner')} color="primary" size="lg">Dinner</Button>{' '}
            <Button onClick={()=>this.addPreference('movies')} color="warning" size="lg">Movies</Button>{' '}
            <Button onClick={()=>this.addPreference('sporting events')} color="danger" size="lg">Sporting Events</Button>{' '}
            <Button onClick={()=>this.addPreference('dancing')} color="secondary" size="lg">Dancing</Button>{' '}
            </FormGroup>
            <Button color="secondary" size="lg" >Back</Button>{' '}
            <Button color="primary" size="lg" >Next</Button>{' '}
          </Form>
        </Row>
      </Container>
    );
  }
}