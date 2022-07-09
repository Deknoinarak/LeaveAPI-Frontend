import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import { CalendarBuilder } from "./CalendarBuilder";
import { dayStyles } from "./CalendarStyles";
import { CalendarHeader } from "./CalendarHeader";
import moment from "moment";

const Calendar = ({ value, setValue, height, events }) => {
  // ** Calendar Algorithm
  const [calendar, setCalendar] = useState([]);
  const [calType, setCalType] = useState("M");
  const dayThai = [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัส",
    "ศุกร์",
    "เสาร์",
  ];

  const calEvent = [...events];

  const isEvent = (d, e) => {
    return d.isBetween(
      moment(e.start).subtract(1, "day"),
      moment(e.end).add(1, "day")
    );
  };

  const eventStyle = (e) => {
    if (e.dayOff) return "plane-departure";
    if (e.hbd) return "cake-candles";
    return "calendar";
  };

  useEffect(() => {
    setCalendar(CalendarBuilder(calType, value));
  }, [calType, value]);

  return (
    <bs.Container
      className="my-3 border p-3"
      style={height && { height: height }}
    >
      <CalendarHeader
        value={value}
        setValue={setValue}
        calType={calType}
        setCalType={setCalType}
      />
      {calType === "M" ? (
        <div>
          <bs.Row className="border-bottom mb-3 mx-2">
            {dayThai.map((d) => (
              <bs.Col
                key={d}
                className="text-uppercase p-3 d-flex justify-content-center align-items-center text-muted"
              >
                {d}
              </bs.Col>
            ))}
          </bs.Row>
          {calendar.map((week) => (
            <bs.Row className="mx-2" key={week}>
              {week.map((day) => (
                <bs.Col className={dayStyles(day, value) + " w-100"} key={day}>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setValue(day)}
                  >
                    {day.format("D").toString()}
                  </div>
                  <bs.Row className="flex-column w-100">
                    {calEvent.map((event, i) => (
                      <div key={event.title}>
                        {isEvent(day, event) ? (
                          <bs.OverlayTrigger
                            delay={{ hide: 400 }}
                            placement={"left"}
                            overlay={
                              <bs.Popover id={`popover-positioned-left`}>
                                <bs.Popover.Body>
                                  <bs.Table borderless>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <h4 className="text-primary">
                                            <i
                                              className={`fas fa-${eventStyle(event)}`}
                                            />
                                          </h4>
                                        </td>
                                        <td>
                                          <h4 className="text-dark">
                                            {event.title}
                                          </h4>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <span>
                                            <i
                                              className={`fas fa-calendar-days`}
                                            />
                                          </span>
                                        </td>
                                        <td>
                                          <span>
                                            {moment(event.start)
                                              .format("LL")
                                              .toString()}
                                            {" "}-{" "}
                                            {moment(event.end)
                                              .format("LL")
                                              .toString()}
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </bs.Table>
                                </bs.Popover.Body>
                              </bs.Popover>
                            }
                          >
                            <bs.Col>
                              <span className="badge bg-gray-200 w-100 text-dark">
                                <i className={`fas fa-${eventStyle(event)}`} />
                              </span>
                            </bs.Col>
                          </bs.OverlayTrigger>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </bs.Row>
                </bs.Col>
              ))}
            </bs.Row>
          ))}
        </div>
      ) : (
        <div className="h-100">
          <bs.Row className="border-bottom mx-2">
            {calendar.map((w) =>
              w.map((d, key) => (
                <bs.Col
                  key={d}
                  className="text-uppercase p-3 d-flex justify-content-center align-items-center text-muted"
                >
                  {d.format(`${dayThai[key]}[ที่] D`).toString()}
                </bs.Col>
              ))
            )}
          </bs.Row>
          <bs.Row className="mx-2 h-75">
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className="fas fa-plane-departure" />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className={`fas fa-plane-departure`} />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className={`fas fa-plane-departure`} />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className={`fas fa-plane-departure`} />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className={`fas fa-plane-departure`} />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className={`fas fa-plane-departure`} />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
            <bs.Col className="border h-100">
              <bs.Row className="flex-column w-100">
                <bs.Col>
                  <span className="badge bg-gray-200 w-100 text-dark">
                    <i className={`fas fa-plane-departure`} />
                  </span>
                  <span className="badge bg-gray-600 w-100 text-truncate">
                    ii
                  </span>
                </bs.Col>
              </bs.Row>
            </bs.Col>
          </bs.Row>
        </div>
      )}
    </bs.Container>
  );
};

export { Calendar };
