import React, { useState, useEffect } from "react";
import axios from "axios";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import "../components/css/all.min.css";

export const Leave = () => {
  const [leaveType, setLeaveType] = useState([]);

  const [show, setShow] = useState(false);
  const [selectType, setSelectType] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectTypeClose = () => setSelectType(false);
  const selectTypeShow = () => setSelectType(true);

  const [type, setType] = useState(false);

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
                  <bs.Col>
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
              <bs.Form.Label>
                ประเภทการลา <sup className="text-danger fw-bold">*</sup>
              </bs.Form.Label>
              <div>
                <bs.Button
                  className="w-100"
                  variant={type ? "success" : "danger"}
                  onClick={() => {
                    selectTypeShow();
                    handleClose();
                  }}
                >
                  {type ? (
                    <>
                      <i className={`fa-solid fa-${type.icon} me-1`} />{" "}
                      {type.title}
                    </>
                  ) : (
                    "เลือกประเภทการลา..."
                  )}
                </bs.Button>
              </div>
            </bs.Form.Group>
            <bs.Row className="mb-3">
              <bs.Form.Group className="col-6 mb-3" controlId="dateStart">
                <bs.Form.Label>วันที่เริ่ม</bs.Form.Label>
                <bs.Form.Control type="date" placeholder="Password" />
              </bs.Form.Group>
              <bs.Form.Group className="col-6 mb-3" controlId="dateEnd">
                <bs.Form.Label>วันที่สิ้นสุด</bs.Form.Label>
                <bs.Form.Control type="date" placeholder="Password" />
              </bs.Form.Group>
            </bs.Row>
            <bs.Form.Group className="mb-3" controlId="formBasicCheckbox">
              <bs.Form.Check type="checkbox" label="Check me out" />
            </bs.Form.Group>
          </bs.Form>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          <bs.Button variant="danger" onClick={handleClose}>
            ยกเลิก
          </bs.Button>
          <bs.Button variant="success">ส่งคำร้อง</bs.Button>
        </bs.Modal.Footer>
      </bs.Modal>

      <bs.Modal
        show={selectType}
        onHide={selectTypeClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <bs.Modal.Header>
          <bs.Modal.Title>เลือกประเภทการลา</bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body>
          <bs.Row>
            {leaveType.map((l) => (
              <bs.Col
                className={`d-flex flex-column justify-content-center align-items-center text-bg-${l.color} py-3`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setType(l);
                  selectTypeClose();
                  handleShow();
                }}
                key={l.value}
              >
                <h1>
                  <i className={`fa-solid fa-${l.icon}`} />
                </h1>
                <h2>{l.title}</h2>
              </bs.Col>
            ))}
          </bs.Row>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          <bs.Button
            variant="success"
            onClick={() => {
              selectTypeClose();
              handleShow();
            }}
          >
            ปิด
          </bs.Button>
        </bs.Modal.Footer>
      </bs.Modal>
    </bs.Container>
  );
};
