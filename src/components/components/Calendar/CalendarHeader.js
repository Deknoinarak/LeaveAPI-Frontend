import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import moment from "moment";

const CalendarHeader = ({ value, setValue, calType, setCalType }) => {
  const currMonthName = () => {
    return value.format("MMMM");
  };

  const currYear = () => {
    return value.format('YYYY');
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().add(1, "month");
  };

  const setToday = () => {
    const newDate = moment(new Date())
    setValue(newDate)
  }

  return (
    <bs.Row className="justify-content-between mx-2 my-2">
      <bs.Col>
        <bs.Row>
          <bs.OverlayTrigger
            placement="bottom"
            delay={{ hide: 200 }}
            overlay={
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(0, 0, 0, 0.67)",
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: 3,
                }}
                className="text-sm"
              >
                Previous month
              </div>
            }
          >
            <bs.Col
              xs="2"
              className="rounded-pill mx-1 d-flex justify-content-center align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setValue(prevMonth())}
            >
              <FontAwesomeIcon icon={solid("chevron-left")} />
            </bs.Col>
          </bs.OverlayTrigger>
          <bs.OverlayTrigger
            placement="bottom"
            delay={{ hide: 200 }}
            overlay={
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(0, 0, 0, 0.67)",
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: 3,
                }}
                className="text-sm"
              >
                Next month
              </div>
            }
          >
            <bs.Col
              xs="2"
              className="rounded-pill mx-1 d-flex justify-content-center align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setValue(nextMonth())}
            >
              <FontAwesomeIcon icon={solid("chevron-right")} />
            </bs.Col>
          </bs.OverlayTrigger>
          <bs.Col className="mx-2 d-flex justify-content-start align-items-center">
            <h5 className="m-0 p-0">
              {currMonthName()} {currYear()}
            </h5>
          </bs.Col>
        </bs.Row>
      </bs.Col>
      <bs.Col></bs.Col>
      <bs.Col className="d-flex justify-content-end">
        <bs.Button variant="secondary" className="mx-3" onClick={() => setToday()}>Today</bs.Button>
        <bs.Dropdown>
          <bs.DropdownButton
            variant="outline-secondary"
            id="SelectCalendarType"
            title={
              calType === "M" ? "Month" : calType === "W" ? "Week" : "Error"
            }
          >
            <bs.Dropdown.Item onClick={() => setCalType("M")}>
              Month
            </bs.Dropdown.Item>
            <bs.Dropdown.Item onClick={() => setCalType("W")}>
              Week
            </bs.Dropdown.Item>
          </bs.DropdownButton>
        </bs.Dropdown>
      </bs.Col>
    </bs.Row>
  );
};

export { CalendarHeader };
