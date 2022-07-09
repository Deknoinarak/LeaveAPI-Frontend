import React, { useState, useEffect } from "react";
import axios from "axios";
import * as bs from "react-bootstrap";
import * as mui from "@mui/material";

export const UserSetting = () => {
  // * Variables * //
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth")
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (userData) {
    return (
      <bs.Container className="my-2">
        <bs.Row>
          <bs.Col xs="12" className="mb-3">
            <bs.Card>
              <bs.Card.Body className="p-4">
                <h2 className="mb-1">ตั้งค่า</h2>
                <h4 className="mb-3">ข้อมูลส่วนตัว</h4>
                <hr />
                <bs.Container className="d-flex justify-content-center align-items-center my-3">
                  <mui.Tooltip title="กดเพื่อเปลี่ยนรูป" placement="top" arrow>
                    <mui.Avatar sx={{ width: 100, height: 100 }} />
                  </mui.Tooltip>
                  <bs.Row className="ms-3 flex-column">
                    <bs.Col>
                      <h3 className="mb-0">{userData.data.name.th.fullname}</h3>
                      <p className="mb-0">{userData.data.name.en.fullname}</p>
                    </bs.Col>
                  </bs.Row>
                </bs.Container>
                <bs.Form>
                  <bs.Row className="mb-3">
                    <bs.Form.Group
                      as={bs.Col}
                      xs="6"
                      className="mb-3"
                      controlId="firstNameTH"
                    >
                      <bs.Form.Label>ชื่อจริง (ภาษาไทย)</bs.Form.Label>
                      <bs.Form.Control value={userData.data.name.th.first} />
                    </bs.Form.Group>
                    <bs.Form.Group
                      as={bs.Col}
                      xs="6"
                      className="mb-3"
                      controlId="lastNameTH"
                    >
                      <bs.Form.Label>นามสกุล (ภาษาไทย)</bs.Form.Label>
                      <bs.Form.Control value={userData.data.name.th.last} />
                    </bs.Form.Group>
                  </bs.Row>
                  <bs.Row className="mb-3">
                    <bs.Form.Group
                      as={bs.Col}
                      xs="6"
                      className="mb-3"
                      controlId="firstNameEN"
                    >
                      <bs.Form.Label>ชื่อจริง (ภาษาอังกฤษ)</bs.Form.Label>
                      <bs.Form.Control value={userData.data.name.en.first} />
                    </bs.Form.Group>
                    <bs.Form.Group
                      as={bs.Col}
                      xs="6"
                      className="mb-3"
                      controlId="lastNameEN"
                    >
                      <bs.Form.Label>นามสกุล (ภาษาอังกฤษ)</bs.Form.Label>
                      <bs.Form.Control value={userData.data.name.en.last} />
                    </bs.Form.Group>
                  </bs.Row>
                  <bs.Button variant="primary">
                    แก้ไขข้อมูล
                  </bs.Button>
                </bs.Form>
              </bs.Card.Body>
            </bs.Card>
          </bs.Col>
        </bs.Row>
      </bs.Container>
    );
  }
};
