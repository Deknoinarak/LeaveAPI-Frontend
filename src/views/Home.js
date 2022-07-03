import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import { Calendar } from "../components/components"
import axios from "axios";
import moment from "moment";
import "moment/locale/th";

const Home = () => {
  const [user, setUser] = useState("");
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [calVal, setCalVal] = useState(moment().locale('th'));

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:8080/fetch/calendar")
      .then((res) => {
        setCalendarEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <bs.Container className="p-3">
      {user && user.user ? (
        <bs.Row>
          <bs.Col xs="12" className="mb-3">
            <bs.Card>
              <bs.Card.Body>
                <h3>ปฏิทิน</h3>
                <Calendar height={"100%"} events={calendarEvents} value={calVal} setValue={setCalVal}/>
              </bs.Card.Body>
            </bs.Card>
          </bs.Col>
        </bs.Row>
      ) : (
        <h1>กรุณาเข้าสู่ระบบก่อน</h1>
      )}
    </bs.Container>
  );
};

export { Home };
