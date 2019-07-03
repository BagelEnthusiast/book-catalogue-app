import React from 'react';
import { Form, FormControl, Button, Container }from 'react-bootstrap'


class LoginForm extends React.Component {

  render(){
    return(
      <Container>
        <div id="login-form">
          <h3>Login</h3>
          <Form onSubmit={(e) => {e.preventDefault(); this.props.login(e.target.children[0].children[0].value, e.target.children[0].children[1].value)}} className="mb-3" size="lg">
            <Form.Group>
              <FormControl id="login-username-input" sz="lg" placeholder="Enter Username"/>
              <FormControl type="password" id="login-password-input" placeholder="Enter Password"/>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </div>
        <div id="signup-form">
          <h3>Sign Up</h3>
          <Form className="mb-3" size="lg">
            <Form.Group>
              <FormControl id="create-username-input" sz="lg" placeholder="Enter Username"/>
              <FormControl type="password" id="create-password-input" placeholder="Enter Password"/>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
          </div>
      </Container>
    )
  }


}

export default LoginForm;
