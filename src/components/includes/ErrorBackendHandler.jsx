import React, { useState, useEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import * as bs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/css/all.min.css";

export const ErrorBackendHandler = () => {
  // * Modal Variables * //
  const [errorShow, setErrorShow] = useState(false);
  const [errorName, setErrorName] = useState("ERR_*");
  const errorValues = useRef();
  const handleErrorShow = () => setErrorShow(true);

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth")
      .catch((err) => {
        console.log(err);
        setErrorName(err);
        handleErrorShow();
      });
  }, []);

  return (
    <bs.Modal show={errorShow} className="text-danger">
      <bs.Modal.Header>
        <bs.Modal.Title>เกิดข้อผิดพลาด</bs.Modal.Title>
      </bs.Modal.Header>
      <bs.Modal.Body className="text-center">
        <i className="fa-solid fa-circle-xmark fa-7x mb-3"></i>
        <h3>
          กรุณาติดต่อเจ้าหน้าที่และ <p>แจ้งข้อมูลด้านล่างกับเจ้าหน้าที่</p>
        </h3>
        <bs.Form.Control
          value={`เกิดข้อผิดพลาด ไม่สามารถติดต่อกับเซิฟเวอร์อีกฝั่งได้\n${errorName.message}\n${errorName.code}`}
          as="textarea"
          rows={3}
          ref={errorValues}
          className="mb-3"
          readOnly
        />
        <Tooltip title="คัดลอกข้อความ" placement="top" arrow>
          <bs.Button
            onClick={() => {
              navigator.clipboard.writeText(errorValues.current.value);
            }}
            variant="secondary"
          >
            กดเพื่อคัดลอกข้อมูล
          </bs.Button>
        </Tooltip>
      </bs.Modal.Body>
      <bs.Modal.Footer>
        <bs.Button variant="primary" onClick={() => window.location.reload()}>
          โหลดใหม่
        </bs.Button>
      </bs.Modal.Footer>
    </bs.Modal>
  );
};
