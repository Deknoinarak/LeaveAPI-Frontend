import React, { useState, useEffect } from "react";
import { Notifications } from "../../components/components";
import axios from "axios";
import * as bs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/css/all.min.css";

const Home = () => {
  // * Variables * //
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (userData) {
    if (userData.data.account.role === "super") {
      return (
        <bs.Container className="my-3">
          <bs.Row>
            <bs.Col lg="8">
              <bs.Card>
                <bs.Card.Body className="p-4">
                  <h1>ทางลัด</h1>
                  <bs.Row className="flex-column">
                    <bs.Col className="flex">
                      <bs.Button as="a" href="/hr/users">
                        จัดการพนักงาน
                      </bs.Button>
                    </bs.Col>
                  </bs.Row>
                </bs.Card.Body>
              </bs.Card>
            </bs.Col>
            <bs.Col lg="4">
              <bs.Card>
                <bs.Card.Body className="p-4">
                  <h1>แจ้งเตือน</h1>
                  <Notifications
                    data={[
                      {
                        author: "ธนาธิป สุดประเสริฐ",
                        type: "pending",
                        name: "ธนาธิป สุดประเสริฐ",
                        time: "2022-07-01",
                      },
                      {
                        author: "นนทพัทธ์ จำใจ",
                        type: "decline",
                        name: "ธนาธิป สุดประเสริฐ",
                        time: "2022-07-05",
                      },
                      {
                        author: "ธนาธิป สุดประเสริฐ",
                        type: "pending",
                        name: "ธนาธิป สุดประเสริฐ",
                        time: "2022-07-06",
                      },
                      {
                        author: "นนทพัทธ์ จำใจ",
                        type: "approve",
                        name: "ธนาธิป สุดประเสริฐ",
                        time: new Date(),
                      },
                    ]}
                  />
                </bs.Card.Body>
              </bs.Card>
            </bs.Col>
          </bs.Row>
        </bs.Container>
      );
    } else {
      return window.location.reload();
    }
  }
};

export { Home };
