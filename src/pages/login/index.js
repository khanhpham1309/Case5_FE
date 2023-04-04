import React, { useState } from "react";
import axios from "axios";

import "./login.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const INIT_ERROR_MESSAGE = {
  name: "",
  pwd: "",
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_REACT_BASE_API,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    ContentType: "application/json",
    Accept: "application/json",
    CacheControl: "no-cache"
  },
});

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState(INIT_ERROR_MESSAGE);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleChangeName = (e) => {
    setName(e.target.value);
    setErr({ ...err, name: "" });
  };

  const handleChangePwd = (e) => {
    setPwd(e.target.value);
    setErr({ ...err, pwd: "" });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      return setErr({ ...err, name: "This field is required" });
    }
    if (pwd === "") {
      return setErr({ ...err, pwd: "This field is required" });
    }

    // try {
    //   const res = await instance.post("/users/login", {
    //     name: name,
    //     password: pwd,
    //   });
    //   console.log(res)
    // } catch (err) {
    //   console.log(err);
    // }

    navigate('/home')
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <div className="pwd">
        <input
          onChange={handleChangeName}
          type="text"
          placeholder="user name"
        />
        </div>
   
        {err.name ? (
          <p style={{ fontSize: "12px", color: "red" }}>{err.name}</p>
        ) : null}

        <div className="pwd">
          <input
            onChange={handleChangePwd}
            type={isShowPassword ? "text" : "password"}
            placeholder="password"
          />
          <div className="icon"
          onClick={() => setIsShowPassword(!isShowPassword)}
          >
            <SearchIcon />
          </div>
        </div>
        {err.pwd ? (
          <p style={{ fontSize: "12px", color: "red" }}>{err.pwd}</p>
        ) : null}
        <button type="submit">Submit</button>
        <Link to="/register">
            Dont have account yet? Go to register
        </Link>
      </form>
    </div>
  );
};

export default Login;
