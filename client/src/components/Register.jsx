import React, { useState } from "react";
import { Form, Label, Input, Button, FormGroup } from "reactstrap";
import axios from "axios";

const user = {
  username: "",
  password: ""
};

function Register(props) {
  const [formValues, setFormValues] = useState(user);

  const onInputChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/register", formValues)
      .then(res => {
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" onChange={onInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" onChange={onInputChange} />
        </FormGroup>
        <Button onClick={onSubmit} color="success">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
