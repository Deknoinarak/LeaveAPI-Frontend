import React, { useState, useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import "bootstrap-select/dist/js/bootstrap-select.js";
import "bootstrap-select/dist/css/bootstrap-select.min.css";

export const Leave = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log($(".selectpicker").selectpicker());
  }, []);

  return (
    <bs.Container className="my-2">
      <bs.Row>
        <bs.Col xs="12" className="mb-3">
          <bs.Card>
            <bs.Card.Body>
              <h2>การลาของฉัน</h2>
              <div>
                <bs.Button variant="success" onClick={handleShow}>
                  ยื่นอนุมัติการลา
                </bs.Button>
              </div>
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
      </bs.Row>

      <bs.Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <bs.Modal.Header closeButton>
          <bs.Modal.Title>ยื่นอนุมัติการลา</bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body>
          <bs.Form>
            <bs.Form.Group className="mb-3" controlId="LeaveTypeSelect">
              <bs.Form.Label>Password</bs.Form.Label>
              <div>
                <select id="testDropdown" className="form-control selectpicker">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </bs.Form.Group>

            <bs.Form.Group className="mb-3" controlId="formBasicPassword">
              <bs.Form.Label>Password</bs.Form.Label>
              <bs.Form.Control type="password" placeholder="Password" />
            </bs.Form.Group>
            <bs.Form.Group className="mb-3" controlId="formBasicCheckbox">
              <bs.Form.Check type="checkbox" label="Check me out" />
            </bs.Form.Group>
            <bs.Button variant="primary" type="submit">
              Submit
            </bs.Button>
          </bs.Form>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          <bs.Button variant="secondary" onClick={handleClose}>
            Close
          </bs.Button>
          <bs.Button variant="primary">Understood</bs.Button>
        </bs.Modal.Footer>
      </bs.Modal>
    </bs.Container>
  );
};
