import React, { useState, useEffect } from "react";
import { FormModal } from "./Leave/FormModal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import "../components/css/all.min.css";

export const Leave = () => {
  const [showForm, setShowForm] = useState(false);
  const formShow = () => setShowForm(true);

  const [leaveType, setLeaveType] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/fetch/leavetype")
      .then((res) => {
        setLeaveType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <bs.Container className="my-2">
      <bs.Row>
        <bs.Col xs="12" className="mb-3">
          <bs.Card>
            <bs.Card.Body>
              <h2 className="mb-3">การลาของฉัน</h2>
              <bs.Row className="mb-3">
                <bs.Col xs="12">
                  <h3>สิทธิการลาของฉัน</h3>
                </bs.Col>
                {leaveType.map((l) => (
                  <bs.Col key={l.title}>
                    <bs.Card className={`text-bg-${l.color}`}>
                      <bs.Card.Body className="d-flex justify-content-between align-items-center">
                        <h2>{l.title}</h2>
                        <h1>12</h1>
                      </bs.Card.Body>
                    </bs.Card>
                  </bs.Col>
                ))}
              </bs.Row>
              <div className="mb-3">
                <bs.Button variant="success" onClick={formShow}>
                  ยื่นอนุมัติการลา
                </bs.Button>
              </div>
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
      </bs.Row>

      <FormModal show={showForm} setShow={setShowForm}/>
    </bs.Container>
  );
};
