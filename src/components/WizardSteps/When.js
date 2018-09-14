import React, { Component } from 'react';
import {  FormGroup, HelpBlock, Row } from 'reactstrap';

class When extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                    <Row>
                        <form>
                            <FormGroup controlId="formControlsSelect">
                            </FormGroup>
                        </form>
                    </Row>
            </div>
        );
    }
}

export default When