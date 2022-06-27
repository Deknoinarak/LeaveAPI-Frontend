import { useState, useEffect } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState("")

  useEffect(() => {
    axios.post('http://localhost:8080/auth')
    .then(function (res) {
      setUser(res.data)
      console.log("HA")
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  const login = () => {
    console.log("HA1")
    axios.post('http://localhost:8080/login', {
      email: loginEmail,
      password: loginPassword
    })
    .then(function (response) {
      window.location.reload(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  const logout = () => {
    console.log("HA2")
    axios.post('http://localhost:8080/logout')
    .then(function (response) {
      if (response.data === "signout") {
        window.location.reload(false);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <center className="p-3">
      <h1>Leave API</h1>
      <form>
        <h4>Login</h4>
        <input type="text" placeholder="email..." onChange={event => setLoginEmail(event.target.value)}/>
        <input type="password" placeholder="password..." onChange={event => setLoginPassword(event.target.value)}/>
        <button type="button" onClick={login}>Login</button>
      </form>
      <h2>Logged in as</h2>
      {user.email}
      <div><button onClick={logout}>Logout</button></div>
    </center>
  );
}

export default App;