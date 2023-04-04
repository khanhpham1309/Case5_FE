import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';


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
  const dispatch = useDispatch();

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

    try {
      const res = await instance.post("/users/login", {
        name: name,
        password: pwd,
      });

      let token = res.data.token;
      if (res.status === 200) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/home')
      } else {
        navigate('')
      }
    } catch (err) {

      console.log(err, "Error");
    }


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
        <button type="submit">Login</button>
        <Link to="/register">
            Dont have account yet? Go to register
        </Link>
      </form>
    </div>
  );
};

export default Login;
