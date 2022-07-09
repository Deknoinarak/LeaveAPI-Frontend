import React, { useState } from "react";
import axios from "axios"
import * as bs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors["Auth"])
      setErrors({
        ...errors,
        "Auth": null
      });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null
      });
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateForm = () => {
    const newErrors = {}

    if (!form.email || form.email === '') newErrors.email = "กรุณากรอกอีเมลของท่าน"
    else if (!validateEmail(form.email))
      newErrors.email = "อีเมลของท่านไม่ถูกต้อง"
    if (!form.password || form.password === '')
      newErrors.password = "กรุณากรอกรหัสผ่านของท่าน"

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault();

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      login();
    }
  };

  const login = () => {
    axios.post('http://localhost:8080/login', {
      email: form.email,
      password: form.password
    })
    .then(res => {
      if (res) window.location.href = "/";
    })
    .catch(function (error) {
      setErrors({
        ...errors,
        "Auth":"Something wrong, please try again",
      })
    });
  };

  return (
    <bs.Container className="py-5">
      <bs.Row>
        <bs.Col lg="6" xs="12">
          <bs.Card>
            <bs.Card.Body>
              <h2>เข้าสู่ระบบ</h2>
              <h5>Login</h5>
              <hr />
              <p className="text-danger">{errors.Auth}</p>
              <bs.Form>
                <bs.Form.Group className="mb-3" controlId="emailLoginForm">
                  <bs.Form.Label>อีเมล</bs.Form.Label>
                  <bs.Form.Control
                    type="email"
                    placeholder="อีเมล..."
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    isInvalid={!!errors.email}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.email}
                  </bs.Form.Control.Feedback>
                </bs.Form.Group>
                <bs.Form.Group className="mb-3" controlId="passwordLoginForm">
                  <bs.Form.Label>รหัสผ่าน</bs.Form.Label>
                  <bs.Form.Control
                    type="password"
                    placeholder="รหัสผ่าน..."
                    value={form.password}
                    onChange={(e) => setField("password", e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.password}
                  </bs.Form.Control.Feedback>
                </bs.Form.Group>
                <bs.Button variant="success" className="my-2" type="submit" onClick={handleSubmit}>
                  เข้าลู่ระบบ
                </bs.Button>
              </bs.Form>
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
        <bs.Col lg="6" xs="12" className="d-none d-lg-block">
          <bs.Image fluid="true" rounded="true" src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"/>
        </bs.Col>
      </bs.Row>
    </bs.Container>
  );
};

export { Login };
