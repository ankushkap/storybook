import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
            <Container>
        <Row>
          <Col>Login Form</Col>
          <Col>Social Share</Col>
        </Row>
      </Container>
        </div>
      );
    }
  }

  export default Header;