import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as bs from "react-bootstrap";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";

const Home = () => {

  const [user, setUser] = useState("")
  
  useEffect(() => {
    axios.post("http://localhost:8080/auth")
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const localizer = momentLocalizer(moment)
  const leaveEvents = [
    {
      title: "ลาพักร้อน",
      allDay: true,
      start: new Date(2022, 6, 29),
      end: new Date(2022, 6, 30),
    }
  ]

  return (
    <bs.Container className="p-3">
      <bs.Row>
        <bs.Col xs="12" className="mb-3">
          <bs.Card>
            <bs.Card.Body>
              <h3>ปฏิทินการลา</h3>
              <Calendar
                localizer={localizer}
                events={leaveEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
        <bs.Col xs="12" className="mb-3">
          <bs.Card>
            <bs.Card.Body>
              <h3>การลาของฉัน</h3>
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
      </bs.Row>
    </bs.Container>
  );
}

export { Home };