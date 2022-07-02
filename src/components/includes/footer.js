import * as bs from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Logo } from "../img/mclogo.svg";
import moment from "moment";

const Footer = () => {
  return (
    <bs.Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4">
          <div>
            <a
              href="https://moralcenter.or.th"
              className="mb-3 me-2 mb-md-0 text-decoration-none"
            >
              <Logo style={{ width: 50 }} />
            </a>
          </div>
          <span className="mb-3 mb-md-0 text-muted">
            <p>
              &copy; {moment().format("YYYY").toString()} Center For Morality
              Promotion (CMP) (Public Organization)
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
            <a href="https://moralcenter.or.th" className="nav-link px-2 text-muted">
              Moralcenter
            </a>
          </li>
          <li className="nav-item">
            <a href="https://moralcenter.or.th/eservice" className="nav-link px-2 text-muted">
              E-service
            </a>
          </li>
        </ul>
      </footer>
    </bs.Container>
  );
};

export { Footer };
