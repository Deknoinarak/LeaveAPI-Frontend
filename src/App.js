import { useState, useEffect } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [createEmail, setCreateEmail] = useState("")
  const [createPassword, setCreatePassword] = useState("")
  const [user, setUser] = useState("")

  useEffect(() => {
    axios.post('http://localhost:8080/auth')
    .then(function (res) {
      setUser(res.data.user)
      console.log(res.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  const getAuth = () => {
    axios.post('http://localhost:8080/auth')
      .then(function (res) {
        return res.data
      })
      .catch(function (error) {
        return error
      });
  }

  const create = () => {
    axios.post('http://localhost:8080/create', {
      email: createEmail,
      password: createPassword
    })
    .then(function (response) {
      console.log(getAuth())
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  const login = () => {
    axios.post('http://localhost:8080/login', {
      email: loginEmail,
      password: loginPassword
    })
    .then(function (response) {
      console.log(getAuth())
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  const logout = () => {
    console.log("HA2")
    axios.post('http://localhost:8080/logout')
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
      {/* {
      user ?
      user.providerData[0].displayName ? user.providerData[0].displayName : user.email : ""
      } */}
      <div><button onClick={logout}>Logout</button></div>
      <form>
        <h4>Create User</h4>
        <input type="text" placeholder="email..." onChange={event => setCreateEmail(event.target.value)}/>
        <input type="password" placeholder="password..." onChange={event => setCreatePassword(event.target.value)}/>
        <button type="button" onClick={create}>Create</button>
      </form>
    </center>
  );
}

export default App;