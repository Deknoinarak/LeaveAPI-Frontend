import React, { useState, useRef } from "react";
import * as bs from "react-bootstrap";
import EnhancedTable from "./Users/Table";
import * as mui from "@mui/material";
import * as muiIcon from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/css/all.min.css";

export const Users = () => {
  // * Form * //
  const [showForm, setShowForm] = useState(false);

  const steps = ["ข้อมูลทั่วไป", "Create an ad group", "Create an ad"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const progress = useRef();
  const [progressStatus, setProgressStatus] = useState();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleShowForm = () => setShowForm(!showForm);

  const handleSubmit = () => {
    console.log("Form Submited!");
    if (progress.current) {
      clearTimeout(progress.current);
    }

    progress.current = window.setTimeout(() => {
      setProgressStatus("success");
    }, 3000);
  };

  return (
    <bs.Container className="my-3">
      <bs.Row>
        <bs.Col>
          <bs.Card>
            <bs.Card.Body className="p-4">
              <div className="mb-3">
                <h1>จัดการพนักงาน</h1>
                <bs.Button
                  variant="success"
                  className="me-3 mb-3"
                  onClick={handleShowForm}
                >
                  <muiIcon.Add className="me-1" />
                  สร้างพนักงานใหม่
                </bs.Button>
                <bs.Button variant="primary" className="me-3 mb-3">
                  <muiIcon.Search className="me-1" />
                  ค้นหาพนักงาน
                </bs.Button>
              </div>
              <EnhancedTable />
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
      </bs.Row>

      <bs.Modal
        show={showForm}
        onHide={handleShowForm}
        backdrop="static"
        keyboard={false}
        centered
      >
        <bs.Modal.Header closeButton>
          <bs.Modal.Title>สร้างพนักงาน</bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body>
          <mui.Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <mui.Typography variant="caption">Optional</mui.Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <mui.Step key={label} {...stepProps}>
                  <mui.StepLabel {...labelProps}>{label}</mui.StepLabel>
                </mui.Step>
              );
            })}
          </mui.Stepper>
          {activeStep === steps.length && (
            <bs.Row className="justify-content-center align-items-center my-5">
              {handleSubmit()}
              <div className="mb-3 flex justify-content-center align-items-center">
                {progressStatus === "success" ? (
                  <mui.Fab color="success">
                    <muiIcon.Check />
                  </mui.Fab>
                ) : (
                  <mui.CircularProgress />
                )}
              </div>
              {progressStatus === "success"
                ? "เพิ่มข้อมูลเสร็จสิ่้น"
                : "กำลังเพิ่มข้อมูลพนักงาน..."}
            </bs.Row>
          )}
        </bs.Modal.Body>
        <bs.Modal.Footer className="justify-content-between">
          <div>
            {activeStep < steps.length && (
              <bs.Button variant="danger" onClick={handleShowForm}>
                ยกเลิก
              </bs.Button>
            )}
          </div>
          <div>
            <bs.Button
              variant={
                activeStep >= steps.length ? "success" : "outline-primary"
              }
              disabled={activeStep === 0}
              onClick={activeStep >= steps.length ? handleShowForm : handleBack}
              className="me-2"
            >
              {activeStep >= steps.length ? "ปิด" : "ย้อนกลับ"}
            </bs.Button>
            {isStepOptional(activeStep) && (
              <bs.Button
                variant="outline-secondary"
                onClick={handleSkip}
                className="me-2"
              >
                ข้าม
              </bs.Button>
            )}
            {activeStep < steps.length && (
              <bs.Button
                variant={activeStep >= steps.length - 1 ? "success" : "primary"}
                onClick={handleNext}
              >
                {activeStep >= steps.length - 1 ? "สร้าง" : "ต่อไป"}
              </bs.Button>
            )}
          </div>
        </bs.Modal.Footer>
      </bs.Modal>
    </bs.Container>
  );
};
