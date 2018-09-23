import React from 'react';
import { Container, Row, Button, Form, FormGroup, Label } from 'reactstrap';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

export default class When extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      showDatePicker: false,
      date: props.initialDate,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onDatePress = this.onDatePress.bind(this);
    this.showDatePicker= this.showDatePicker.bind(this);
  }
  onDateChange(date) {
    this.setState({ date });
  }

  onDatePress(tomorrow) {
    const d = moment(new Date())
    if(tomorrow){
      d.add(1, 'day');
    }
    this.setState({date:d, showDatePicker: true});
  }

  showDatePicker() {
    this.setState({showDatePicker:true})
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }
  render() {
    const { focused, date, showDatePicker } = this.state;
    return (
      <Container>
        <Row>
          <Form>
            <FormGroup>
              <Label for="date_input">When would you like to go? </Label>
              <div />
              <Button size="lg" onClick={()=>this.onDatePress(false)} outline color="primary">Today</Button>{' '}
              <Button size="lg" onClick={()=>this.onDatePress(true)} outline color="secondary">Tomorrow</Button>{' '}
              <Button size="lg" onClick={this.showDatePicker} outline color="info">Another Time</Button>{' '}
              {showDatePicker ? <SingleDatePicker
                id="date_input"
                date={date}
                minTime={moment(new Date())}
                focused={focused}
                onDateChange={this.onDateChange}
                onFocusChange={this.onFocusChange} /> : null }
            </FormGroup>
            <Button size="lg" block>Next</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}