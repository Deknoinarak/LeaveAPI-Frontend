import * as bs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios"

const Navbar = () => {

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

  const logout = () => {
    axios.post("http://localhost:8080/logout")
      .then(res => {
        res.data ? window.location.href = "/" : alert("เกิดข้อผิดพลาด")
      })
      .catch(err => {
        console.log(err)
      })
  }

  const pathName = window.location.pathname
  const getHR = pathName.split('/');

  return (
    <bs.Container fluid className="m-0 p-0">
      { getHR[1] === "hr" ?
        <bs.Navbar bg="dark" variant="dark" expand="lg">
          <bs.Container>
            <bs.Navbar.Brand href="/hr">ระบบหลังบ้าน</bs.Navbar.Brand>
            <bs.Navbar.Toggle aria-controls="Navbar-Toggle"/>
            <bs.Navbar.Collapse id="Navbar-Toggle">
              <bs.Nav>
                <bs.Nav.Link href="/hr/user">พนักงานทั้งหมด</bs.Nav.Link>
              </bs.Nav>
            </bs.Navbar.Collapse>
            <bs.Navbar.Collapse className="justify-content-end">
              <bs.Button variant="secondary" href="/">กลับสู่ระบบลา &gt;</bs.Button>
            </bs.Navbar.Collapse>
          </bs.Container>
        </bs.Navbar>
        :
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
              {
                user && user.user ?
                  <bs.NavDropdown title={user.user.providerData.displayName ?
                    user.user.providerData.displayName : user.user.email} id="UserProfile" className="pe-3">
                    <bs.NavDropdown.Item className="py-2" href="/settings/user">ข้อมูลส่วนตัว</bs.NavDropdown.Item>
                    {
                      user.data.Role === "superadmin" ?
                      <bs.NavDropdown.Item className="py-2" href="/hr">จัดการ (Admin Panel)</bs.NavDropdown.Item> : ""
                    }
                    <bs.NavDropdown.Divider/>
                    <bs.NavDropdown.Item>
                      <bs.Button onClick={logout} variant="danger">
                        ออกจากระบบ &gt;
                      </bs.Button>
                    </bs.NavDropdown.Item>
                  </bs.NavDropdown>
                :
                <bs.Button href="Login">
                  เข้าสู่ระบบ
                </bs.Button>
              } 
              </bs.Navbar.Collapse>
          </bs.Container>
        </bs.Navbar>
      }
    </bs.Container>
  )
}

export { Navbar }