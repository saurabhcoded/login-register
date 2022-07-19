import React, { useState } from "react";
import axios from "axios";

function App() {
  const [registerName, setRegisterName] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [loginName, setLoginName] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [display, setDisplay] = useState("fade");

  const onRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        name: registerName,
        password: registerPassword,
      })
      .then((response) => {
        setMessage(response.data.message);
        setDisplay(response.data.display)
        setTimeout(() => {
          setMessage(null);
          setDisplay("fade");
        },3000);
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        name: loginName,
        password: loginPassword,
      })
      .then((response) => {
        setMessage(response.data.message);
        setDisplay(response.data.display)
        setUser(`user ${response.data.user}`);
        setTimeout(() => {
          setMessage(null);
          setDisplay("fade");
        },3000);
      });
  };

  return (
    <div className="App container">
      {/* <!-- Modal --> */}
      <div className={`card w-25 ${display} ms-auto mt-2 bg-success bg-opacity-50 text-light border-0 shadow `} >
        <div className="card-body">
          <h5 className="card-title">Notification</h5>
          <p className="card-text">
            {message}
          </p>
        </div>
      </div>
      <h3 className="text-center">{user}</h3>
      <div className="container d-flex justify-content-around mt-5">
        <form className="form w-25 m-auto text-center bg-secondary bg-opacity-50 p-4 shadow">
          <h2>Register</h2>
          <div className="my-3">
            <label htmlFor="name" className="fw-semibold">
              UserName
            </label>
            <input
              type="text"
              className="form-control form-control-lg border-0 rounded-0"
              onChange={(e) => setRegisterName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="fw-semibold">
              Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg border-0 rounded-0"
              onChange={(e) =>
                setRegisterPassword(e.target.value.replace(/\s/g, ""))
              }
              required
            />
          </div>
          <button
            className="btn btn-primary rounded-0 fw-bold fs-5"
            onClick={onRegister}
          >
            Signup
          </button>
        </form>

        <form className="form w-25 m-auto text-center bg-secondary bg-opacity-50 p-4 shadow">
          <h2>Log In</h2>
          <div className="my-3">
            <label htmlFor="name" className="fw-semibold">
              UserName
            </label>
            <input
              type="text"
              className="form-control form-control-lg border-0 rounded-0"
              onChange={(e) => {
                setLoginName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="fw-semibold">
              Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg border-0 rounded-0"
              onChange={(e) => {
                setLoginPassword(e.target.value.replace(/\s/g, ""));
              }}
            />
          </div>
          <button
            onClick={onLogin}
            className="btn btn-primary rounded-0 fw-bold fs-5"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
