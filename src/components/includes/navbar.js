import * as bs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <bs.Navbar bg="light" expand="lg">
      <bs.Container>
        <bs.Navbar.Brand href="/">ระบบลาออนไลน์</bs.Navbar.Brand>
        <bs.Navbar.Toggle aria-controls="Navbar-Toggle"/>
        <bs.Navbar.Collapse id="Navbar-Toggle">
          <bs.Nav>
            <bs.Nav.Link href="/leave">เริ่มลา</bs.Nav.Link>
            <bs.Nav.Link href="/calendar">ตารางการลา</bs.Nav.Link>
          </bs.Nav>
        </bs.Navbar.Collapse>
        <bs.Navbar.Collapse className="justify-content-end">
          <bs.Button href="Login">
            เข้าสู่ระบบ
          </bs.Button>
        </bs.Navbar.Collapse>
      </bs.Container>
    </bs.Navbar>
  )
}

export { Navbar }