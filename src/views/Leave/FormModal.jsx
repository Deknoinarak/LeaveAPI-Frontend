import React, { useState, useEffect } from "react";
import axios from "axios";
// import { FileUploader } from "react-drag-drop-files";
import { DatePicker, TimePicker } from "../components/DatePicker";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import "../../components/css/all.min.css";

// const fileTypes = ["PDF", "JPG", "JPEG", "PNG", "DOCX", "DOC"];

export const FormModal = ({ show, setShow }) => {
  // * Select Type Modal * //
  const [leaveType, setLeaveType] = useState([]);
  const [selectType, setSelectType] = useState(false);
  const selectTypeClose = () => setSelectType(false);
  const selectTypeShow = () => setSelectType(true);

  // * Main Modal * //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // * Form Varaibles * //
  // const [attachment, setAttachment] = useState(null);

  // const handleFileUpload = (file) => {
  //   setAttachment(file);
  // };

  // * Form Validation * //
  const [form, setForm] = useState({
    timeType: "full",
    dateStart: new Date(),
    dateEnd: new Date(),
  });
  const [errors, setErrors] = useState({});
  const setField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });

    if (!!errors[name])
      setErrors({
        ...errors,
        [name]: null,
      });
  };
  const validateForm = () => {
    const newErrors = {};

    if (!form.type || form.type === "")
      newErrors.type = "กรุณาเลือกประเภทการลา";
    if (!form.dateStart || form.dateStart === "")
      newErrors.dateStart = "กรุณาเลือกวันที่ที่เริ่มลา";
    if (!form.dateEnd || form.dateEnd === "")
      newErrors.dateEnd = "กรุณาเลือกวันที่ที่สิ้นสุดการลา";
    if ((!form.timeStart || form.timeStart === "") && !form.timeType)
      newErrors.timeStart = "กรุณาเลือกเวลาเริ่มลา";
    if ((!form.timeEnd || form.timeEnd === "") && !form.timeType)
      newErrors.timeEnd = "กรุณาเลือกเวลาสิ้นสุดการลา";
    if ((!form.timeEnd || form.timeEnd === "") && !form.timeType)
      newErrors.timeEnd = "กรุณาเลือกเวลาสิ้นสุดการลา";
    ["1", "2", "3"].forEach((num) => {
      if (!form[`manager${num}`] || form[`manager${num}`] === "")
        newErrors[`manager${num}`] = "กรุณาเลือกผู้บัญชาการ";
    });

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("GET Submit!");
    }
  };

  // * Others * //
  const handleSelectTime = (e) => {
    const value = e.target.id;

    if (value === "setTime") {
      setField("timeType", false);
    } else {
      setField("timeType", value);
    }
  };

  // * Get Leave Type * //
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
    <bs.Container>
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
                  variant={form.type ? "success" : "danger"}
                  onClick={() => {
                    selectTypeShow();
                    handleClose();
                  }}
                >
                  {form.type ? (
                    <>
                      <i className={`fa-solid fa-${form.type.icon} me-1`} />{" "}
                      {form.type.title}
                    </>
                  ) : (
                    "เลือกประเภทการลา..."
                  )}
                </bs.Button>
                <bs.Form.Control type="hidden" isInvalid={!!errors.type} />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.type}
                </bs.Form.Control.Feedback>
              </div>
            </bs.Form.Group>
            <bs.Row className="mb-3">
              <bs.Form.Group className="col-6 mb-3" controlId="dateStart">
                <bs.Form.Label>
                  วันที่เริ่ม <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <DatePicker
                  label="วันที่เริ่ม"
                  time={form.dateStart}
                  setTime={setField}
                  name="dateStart"
                  inputFormat={`dd LLL yyyy`}
                />
                <bs.Form.Control type="hidden" isInvalid={!!errors.dateStart} />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.dateStart}
                </bs.Form.Control.Feedback>
              </bs.Form.Group>
              <bs.Form.Group className="col-6 mb-3" controlId="dateEnd">
                <bs.Form.Label>
                  วันที่สิ้นสุด <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
                <DatePicker
                  label="วันที่สิ้นสุด"
                  time={form.dateEnd}
                  setTime={setField}
                  name="dateEnd"
                  minDate={form.dateStart}
                  inputFormat={`dd LLL yyyy`}
                />
                <bs.Form.Control type="hidden" isInvalid={!!errors.dateEnd} />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.dateEnd}
                </bs.Form.Control.Feedback>
              </bs.Form.Group>
            </bs.Row>
            <bs.Row>
              <bs.Col xs="12">
                <bs.Form.Label>
                  เวลา <sup className="text-danger fw-bold">*</sup>
                </bs.Form.Label>
              </bs.Col>
              <bs.Form.Group className="col-12 mb-3" controlId="timeType">
                {form.timeType && (
                  <div>
                    <span>
                      ตอนนี้เลือก: ลา
                      {form.timeType === "full"
                        ? "ทั้งวัน"
                        : form.timeType === "half" && "ครึ่งวัน"}
                    </span>
                  </div>
                )}
                {[
                  { title: "กำหนดเวลา", id: "setTime" },
                  { title: "ครึ่งวัน", id: "half" },
                  { title: "ทั้งวัน", id: "full" },
                ].map((e) => (
                  <bs.Form.Check
                    type="radio"
                    label={e.title}
                    id={e.id}
                    name="selectTime"
                    onChange={handleSelectTime}
                    key={e.id}
                  />
                ))}
              </bs.Form.Group>
            </bs.Row>
            {!form.timeType && (
              <bs.Row className="mb-3">
                <bs.Form.Group className="col-6 mb-3" controlId="timeStart">
                  <bs.Form.Label>
                    เวลาเริ่ม <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <TimePicker
                    label="เวลาเริ่ม"
                    time={form.timeStart}
                    setTime={setField}
                    name="timeStart"
                    ampm={false}
                    minutesStep={5}
                  />
                  <bs.Form.Control
                    type="hidden"
                    isInvalid={!!errors.timeStart}
                  />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.timeStart}
                  </bs.Form.Control.Feedback>
                </bs.Form.Group>
                <bs.Form.Group className="col-6 mb-3" controlId="timeEnd">
                  <bs.Form.Label>
                    เวลาสิ้นสุด <sup className="text-danger fw-bold">*</sup>
                  </bs.Form.Label>
                  <TimePicker
                    label="เวลาสิ้นสุด"
                    time={form.timeEnd}
                    setTime={setField}
                    name="timeEnd"
                    ampm={false}
                    minutesStep={5}
                  />
                  <bs.Form.Control type="hidden" isInvalid={!!errors.timeEnd} />
                  <bs.Form.Control.Feedback type="invalid">
                    {errors.timeEnd}
                  </bs.Form.Control.Feedback>
                </bs.Form.Group>
              </bs.Row>
            )}
            <bs.Form.Group className="mb-3" controlId="dayOffReason">
              <bs.Form.Label>เหตุผลการลา</bs.Form.Label>
              <bs.Form.Control
                as="textarea"
                rows={3}
                value={form.reason}
                onChange={(e) => setField("reason", e.target.value)}
                placeholder="เหตุผลการลา..."
                isInvalid={!!errors.reason}
              />
            </bs.Form.Group>
            {/* // TODO: Attachment */}
            {/* <bs.Form.Group className="mb-3" controlId="fileAttachment">
              <bs.Form.Label>ไฟล์แนบ</bs.Form.Label>
              <FileUploader
                multiple={false}
                label="อัปโหลดหรือลากไฟล์ที่นี่"
                hoverTitle="ลากเพื่ออัปโหลดที่นี่"
                handleChange={handleFileUpload}
                name="fileUpload"
                types={fileTypes}
              />
              <bs.Form.Label className="mt-1">
                {console.log(attachment)}
                {attachment
                  ? `ไฟล์ที่อัพโหลด: ${attachment.name}`
                  : "ยังไม่มีไฟล์ที่อัพโหลด (ไม่จำเป็น)"}
              </bs.Form.Label>
            </bs.Form.Group> */}
            <bs.Form.Group as={bs.Row} className="mb-3" controlId="boss1">
              <bs.Form.Label column>
                ผู้บังคับบัญชาลำดับที่ 1{" "}
                <sup className="text-danger fw-bold">*</sup>
              </bs.Form.Label>
              <bs.Col>
                <bs.Form.Control
                  type="text"
                  placeholder="ผู้บังคับบัญชาลำดับที่ 1..."
                  value={form.manager1}
                  onChange={(e) => setField("manager1", e.target.value)}
                  isInvalid={!!errors.manager1}
                />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.manager1}
                </bs.Form.Control.Feedback>
              </bs.Col>
            </bs.Form.Group>
            <bs.Form.Group as={bs.Row} className="mb-3" controlId="boss2">
              <bs.Form.Label column>
                ผู้บังคับบัญชาลำดับที่ 2{" "}
                <sup className="text-danger fw-bold">*</sup>
              </bs.Form.Label>
              <bs.Col>
                <bs.Form.Control
                  type="text"
                  placeholder="ผู้บังคับบัญชาลำดับที่ 2..."
                  value={form.manager2}
                  onChange={(e) => setField("manager2", e.target.value)}
                  isInvalid={!!errors.manager2}
                />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.manager2}
                </bs.Form.Control.Feedback>
              </bs.Col>
            </bs.Form.Group>
            <bs.Form.Group as={bs.Row} className="mb-3" controlId="boss3">
              <bs.Form.Label column>
                ผู้บังคับบัญชาลำดับที่ 3{" "}
                <sup className="text-danger fw-bold">*</sup>
              </bs.Form.Label>
              <bs.Col>
                <bs.Form.Control
                  type="text"
                  placeholder="ผู้บังคับบัญชาลำดับที่ 3..."
                  value={form.manager3}
                  onChange={(e) => setField("manager3", e.target.value)}
                  isInvalid={!!errors.manager3}
                />
                <bs.Form.Control.Feedback type="invalid">
                  {errors.manager3}
                </bs.Form.Control.Feedback>
              </bs.Col>
            </bs.Form.Group>
          </bs.Form>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          <bs.Button variant="danger" onClick={handleClose}>
            ยกเลิก
          </bs.Button>
          <bs.Button variant="success" onClick={handleSubmit}>
            ส่งคำร้อง
          </bs.Button>
        </bs.Modal.Footer>
      </bs.Modal>

      <bs.Modal
        show={selectType}
        onHide={() => selectTypeClose()}
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
                  setField("type", l);
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
