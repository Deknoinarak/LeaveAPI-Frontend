import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bs from "react-bootstrap";
import axios from "axios";

function Home() {

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

  return (
    <bs.Container className="p-3">
      <bs.Row xs="12">
        <bs.Col className="d-flex justify-content-center">
          <bs.Image fluid="true" src="https://moralcenter.or.th/images/logo.png" className="w-50"/>
        </bs.Col>
      </bs.Row>
      <bs.Row xs="12">
        {
          user && user.user ? <h3>สวัสดี, {user.user.providerData.displayName ? user.user.providerData.displayName : user.user.email}</h3> : <h3>กรุณาเข้าสู่ระบบ</h3>
        }
      </bs.Row>
    </bs.Container>
  );
}

export { Home };