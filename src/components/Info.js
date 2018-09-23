import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Container } from 'reactstrap';

const Info = () =>
<div>
  <Container>
    <h1>Frequently Asked Questions</h1>

     <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>What is this?</ListGroupItemHeading>
          <ListGroupItemText>
          Have you ever had a free night where you wanted to do something but had no idea what you wanted to do? Your night out will solve all your problems. Just answer a few simple questions and your night out will generate the perfect experience.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Does it cost anything?</ListGroupItemHeading>
          <ListGroupItemText>
          The service is completely free, but the suggestions may cost something.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      </Container>
      </div>

export default Info;