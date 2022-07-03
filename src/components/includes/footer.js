import * as bs from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Footer = () => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:8080/getfile/img%2Fmclogo.svg")
    .then((res) => {
      setLogo({ res: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <bs.Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4">
          <div>
            <a
              href="https://moralcenter.or.th"
              className="mb-3 me-2 mb-md-0 text-decoration-none"
            >
              {logo.res ? (
                <bs.Image src={logo.res} style={{ width: 50 }} fluid />
              ) : (
                <Skeleton style={{ width: 50, height: 50 }}/>
              )}
            </a>
          </div>
          <span className="mb-3 mb-md-0 text-muted">
            <p>
              &copy;{" "}
              {moment()
                .format("YYYY")
                .toString()}{" "}
              Center For Morality Promotion (CMP) (Public Organization)
            </p>
          </span>
        </div>

        <ul className="nav col-md-8 justify-content-end list-unstyled d-flex">
          <li className="nav-item">
            <a href="/credit" className="nav-link px-2 text-muted">
              Credit
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://moralcenter.or.th"
              className="nav-link px-2 text-muted"
            >
              Moralcenter
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://moralcenter.or.th/eservice"
              className="nav-link px-2 text-muted"
            >
              E-service
            </a>
          </li>
        </ul>
      </footer>
    </bs.Container>
  );
};

export { Footer };
