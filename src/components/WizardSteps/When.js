import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

export default class When extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTodayPress = this.onTodayPress.bind(this);
    this.onTomorrowPress = this.onTomorrowPress.bind(this);
  }
  onDateChange(date) {
    this.setState({ date });
  }

  onTodayPress() {
    this.setState({date:moment(new Date())});
  }

  
  onTomorrowPress() {
    const d = moment(new Date()).add(1, 'day');
    this.setState({date:d});
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }
  render() {
    const { focused, date } = this.state;
    return (
      <Container>
        <Row>
          <Form>
            <FormGroup>
              <Label for="date_input">When would you like to go? </Label>
              <div />
              <Button onClick={this.onTodayPress} outline color="primary">Today</Button>{' '}
              <Button onClick={this.onTomorrowPress} outline color="secondary">Tomorrow</Button>{' '}
              <Button outline color="info">Another Time</Button>{' '}
              <SingleDatePicker
                id="date_input"
                date={date}
                focused={focused}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
          </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option one is this and that—be sure to include why it's great
            </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option two can be something else and selecting it will deselect option one
            </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Option three is disabled
            </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Check me out
          </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}