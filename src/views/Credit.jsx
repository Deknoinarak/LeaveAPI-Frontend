import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";

export const Credit = () => {
  return (
    <bs.Container className="my-2">
      <bs.Row>
        <bs.Col xs="12">
          <bs.Card className="mb-3">
            <bs.Card.Body>
              <h2>UI/CSS</h2>
              <hr />
              <bs.Row>
                <bs.Col
                  lg="6"
                  className="d-flex justify-content-center align-items-center my-3"
                >
                  <a
                    className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                    href="https://getbootstrap.com"
                    aria-label="Bootstrap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      className="d-block me-2"
                      viewBox="0 0 118 94"
                      role="img"
                    >
                      <title>Bootstrap</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="fs-2">Bootstrap</span>
                  </a>
                </bs.Col>
                <bs.Col
                  lg="6"
                  className="d-flex justify-content-center align-items-center my-3"
                >
                  <a
                    className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                    href="https://github.com/deknoinarak"
                    aria-label="Bootstrap"
                  >
                    <img
                      alt="React-Bootstrap"
                      width="100"
                      className="me-3"
                      src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTI3Ljk4IDIwMTYuODciIGZpbGw9IiM0MWUwZmQiPgogIDxwYXRoICBkPSJNODg4IDExMTkuMTdjMTYtMzIuNjIgMzIuODQtNjUuMzcgNTAuMTctOTcuMzVsLjE1LS4yNyAxOC4zOS0zNS42OCAyNy4xNi00NSAuMTctLjI5YzEwLjE0LTE3LjI2IDIwLjY2LTM0LjY4IDMxLjI3LTUxLjc4bDE4LjY5LTMwLjg3YzI0Ljg4LTQxLjE5IDQ0Ljg4LTcxLjIzIDc2LjQzLTExNC43NiAxNy0yMy40MyAzMy4xMi00NCA1OC42Ni03NS45MmwuMDYtLjA2IDEuMjYtMS41OS40OS0uNjNjMTAuMzctMTMuMjIgMjAuODQtMjYuMjUgMzEuMTEtMzguNzNsLjM0LS40Mi4yLS4yNWMyMy44My0yOS41MSA0OC4xMi01OS4xMyA3Mi4xOS04OGw5LjU3LTExLjQ4VjM1Ni41NEgxMjY3Yy05LjIzLTguNjgtMTguNjYtMTcuMy0yOC4wOC0yNS42OS03Ni4zMi02Ny43Mi0xNTIuNDMtMTIwLjg1LTIyNi4yNy0xNTcuNzktNzUuNzEtMzcuOTItMTQ1LjYzLTU3LjE0LTIwNy44LTU3LjE0LTQ0LjM5IDAtODQuMDYgOS45NC0xMTcuOTEgMjkuNTMtMzIuNTUgMTguODQtNTkuOSA0Ni45MS04MS4zMSA4My40NC0yMC4wNiAzNC4yMy0zNC44NCA3NS44OS00My45NSAxMjMuODEtMTcuNTQgOTIuMzctMTMuNzQgMjA4IDExIDMzNC4zNCAzLjEyIDE1LjkgNi41NiAzMiAxMC4yNSA0OC0xOS43NCA2LTM4LjkxIDEyLjE4LTU3LjEzIDE4LjUzLTExOS4yNiA0MS41OC0yMTkgOTUuOTEtMjg4LjQyIDE1Ny4xNC0zNiAzMS43MS02My44NCA2NS4yMy04Mi44OSA5OS42Mi0yMC4yNCAzNi41Ny0zMC41MSA3NC4wOC0zMC41MSAxMTEuNDkgMCA3NSA0MS41NSAxNTEgMTIwLjE1IDIxOS45NCA3NCA2NC45MyAxNzguNjUgMTIxLjYyIDMwMi41NSAxNjQgMTEuNTEgMy45MSAyMy4yMiA3LjcxIDM1IDExLjM0LTQuMTIgMTcuOTMtNy45MyAzNi0xMS4zNiA1NC0yMy41NiAxMjQuMDgtMjYuMzEgMjM3LjYyLTggMzI4LjM1IDkuNTEgNDcgMjQuNjEgODcuODkgNDQuODkgMTIxLjU3IDIxLjU2IDM1LjggNDguOTMgNjMuNDQgODEuMzQgODIuMTMgMzQuMTUgMTkuNjkgNzQuMzQgMjkuNjcgMTE5LjQ1IDI5LjY3IDYxLjQyIDAgMTMwLjA5LTE4LjIxIDIwNC4xMS01NC4xMyA3Mi41Ni0zNS4yMSAxNDYuNjMtODUuNjQgMjIwLjEzLTE0OS44OSAxMS4zMy05LjkgMjMtMjAuNDkgMzQuNjYtMzEuNTNoMTcuNDF2LTE3NC4zOWwtNi4zNC03LjgtMy0zLjY3LTc5LjgyLTk4LjU1LTQ0LjM1LTU0Ljc1Yy0yMi4zOS0yNy42NC01OC4yNS03OC43OS0xMDEtMTQ0LTM0LTUxLjg0LTU4Ljc2LTkzLjQ3LTcwLjUtMTEzLjYzbC0xLjI4LTIuMjFjLTIwLjQ5LTM1LjMzLTM1LjcxLTYzLjc5LTQ3LjkzLTg2LjY0LTE1LjMtMjguNjMtMzAuMzktNTcuODctNDQuOTEtODdsMi42Ni01LjE3em0tODAuODYtMTcyLjg5Yy0xMy41My0zNC43LTI1LjkyLTY5LjEzLTM3LTEwMi44MSAzNC41Ny03LjEzIDcwLjUxLTEzLjUzIDEwNy4zMi0xOS4xMS0xMi4yOCAyMC4xMS0yNC4zNCA0MC40MS0zNiA2MC42NHMtMjMuMTIgNDAuNjktMzQuMzIgNjEuMjh6bS0zOC4yNSA0NjIuMWMxMS40NS0zNC44NiAyNC4zMS03MC41NiAzOC4zOS0xMDYuNTkgMTEuMjkgMjAuNyAyMi44NyA0MS4zIDM0LjU4IDYxLjUzIDEyLjI3IDIxLjE5IDI1IDQyLjQ4IDM3Ljk1IDYzLjU4LTM4LjQ2LTUuMzItNzUuNjItMTEuNTMtMTEwLjkyLTE4LjUxek03MDcuMTggMzk3LjE2YzktNjEuNzQgMjkuMTQtMTA1Ljg3IDU1LjM3LTEyMS4wNiAxMC44OS02LjMxIDI1LjM0LTkuNSA0Mi45My05LjUgMzguNDcgMCA4OC4yNCAxNS4xIDE0My45MSA0My42NyA2MC4zNCAzMSAxMjUuNzcgNzcuMTEgMTg5LjIyIDEzMy40NXE1LjkgNS4yNCAxMi4wNyAxMC44OWMtNTUuODEgNjEuNzEtMTEwLjgxIDEzMC4yOC0xNjMuNjggMjA0LjEtOTAuMDggOC44LTE3Ni42OCAyMS45NC0yNTcuNzYgMzkuMTEtMi45My0xMi44NC01LjY4LTI1Ljc1LTguMi0zOC41bC0uMjQtMS4zMmMtMTkuMzMtOTguNzYtMjQuMDQtMTg5LTEzLjYyLTI2MC44NHptMTEuMzEgNzI3Yy0zOC4xIDg0LTcwLjQ4IDE2Ny4xNi05Ni4zNyAyNDcuNDYtOS0yLjgtMTcuODktNS43Mi0yNi42NS04LjctMTAzLTM1LjIxLTE4OC43OS04MC42Ni0yNDguMDgtMTMxLjQzLTQ1LjM3LTM4Ljg1LTcyLjQ1LTc5LjgzLTcyLjQ1LTEwOS42MyAwLTMwLjU5IDI3LjA5LTcwIDc0LjM0LTEwOC4yIDU1LTQ0LjQ3IDEzMy4yNy04NS4xMSAyMjYuMTktMTE3LjUgMTUuNzktNS40OCAzMS44Ny0xMC43MyA0OC0xNS42NCAyNS41MyA3OS4xMyA1Ny40OCAxNjAuOTkgOTUuMDEgMjQzLjYzem0uMTIgNDc0LjkyYzIuODYtMTUgNi0zMC4wOSA5LjQzLTQ1LjA5IDgwIDE2LjM3IDE2Ny41OSAyOC43MSAyNjAuNzUgMzYuNzEgNTMuMzggNzQuMzQgMTA4Ljg0IDE0My4zNyAxNjUuMDUgMjA1LjQ0LTYuOTQgNi4zOS0xMy45NCAxMi42OC0yMC45IDE4Ljc5LTgxLjM3IDcxLjEzLTE2My4wOSAxMjIuNTUtMjM2LjI4IDE0OC43MWwtMS41Mi41NGMtMzIuOCAxMS41OC02Mi4wOSAxNy40NS04NyAxNy40NS0xOC4zOCAwLTMzLjIyLTMuMTgtNDQuMTEtOS40Ni0yNi41MS0xNS4yOS00Ny4xNC01OC40Ni01Ni42LTExOC40NS0xMS4wNi02OS45MS03LjE5LTE1Ny45NyAxMS4xNy0yNTQuNjV6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgLz4KICA8cGF0aCBkPSJNMjE5NS4wNyAxMjA1LjFxLTU2LjI2LTEwMy40NS0xNjUuNTQtMTM0LjIzYTIuODUgMi44NSAwIDAgMS0xLjc5LTIuODUgMyAzIDAgMCAxIDEuMzctMi42OGM1NC4yNC0zMC4xNiA5NS45My03My4xMSAxMjUuMTUtMTI3LjlxNDQuMTUtODIuODkgNDQuMTYtMTk5LjQ5YzAtMTI4LjI1LTMyLjQ1LTIyMy42NS05Ny4wNi0yODcuMTFzLTE1MC42Mi05NS0yNTcuNy05NWgtNTc4LjM1Yy0xLjI1IDAtMi4yNyAxLjMxLTIuMjcgMi45M1YxODk0LjNjMCAxLjYyIDEgMi45MyAyLjI3IDIuOTNoNTQ2LjU3cTExNS40MiAwIDE5OS4xMS0zMy42OWM1NS45MS0yMi40MiAxMDEuNC01Mi42OCAxMzcuMjEtOTAuNjhzNjEuOTItODMuMzMgNzguNjYtMTM2YzE2Ljc0LTUyLjIzIDI1LjEtMTA4LjggMjUuMS0xNjkuMjQuMDQtMTA1LjM3LTE5LjA4LTE5Mi41Ny01Ni44OS0yNjIuNTJ6bS03MjIuMzItNjI4YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDMzOS40NmM1Ni45NSAwIDEwMC41MSAxNiAxMzAuNjUgNDcuNTVzNDUuMiA4Ni40IDQ1LjIgMTY0LjE4YzAgNjkuMTgtMTYuNzQgMTIxLjkyLTUwLjI1IDE1OS4wOHMtNzUuMzcgNTUuMzItMTI1LjYzIDU1LjMySDE0NzVjLTEuMjUgMC0yLjI3LTEuMzEtMi4yNy0yLjkzem01MTguMTYgMTAzNS44Yy0zNC44NiA0Mi43Ni04NC40MSA2NC0xNDguMDcgNjRIMTQ3NWMtMS4yNSAwLTIuMjctMS4zMS0yLjI3LTIuOTN2LTQ3Ni40YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDM2Ny44MmM2My42NiAwIDExMi41NyAxOS44OSAxNDguMDcgNjEuMzVzNTIuOTMgOTkuODIgNTIuOTMgMTc2LjNjLjAyIDc3Ljc3LTE3Ljc2IDEzOC4yNy01Mi45MSAxODAuNjF6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgLz48L3N2Zz4K"
                    />
                    <span className="fs-2">React-Bootstrap</span>
                  </a>
                </bs.Col>
                <bs.Col className="d-flex justify-content-center align-items-center my-3">
                  <a
                    className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                    href="https://github.com/deknoinarak"
                    aria-label="Bootstrap"
                  >
                    <img
                      alt="Deknoinarak's Avatar"
                      width="200"
                      src="https://avatars.githubusercontent.com/u/60281096?v=4"
                    />
                  </a>
                </bs.Col>
              </bs.Row>
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
      </bs.Row>
    </bs.Container>
  );
};
