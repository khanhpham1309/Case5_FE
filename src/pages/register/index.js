import React, { useState } from "react";


import "./register.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import customAxios from "../../service/api";
const INIT_ERROR_MESSAGE = {
  name: "",
  pwd: "",
};

const Register = () => {
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
      return setErr({ ...err, name: "Nhập tên đăng ký" });
    }
    if (pwd === "") {
      return setErr({ ...err, pwd: "Nhập mật khẩu đăng ký"});
    }

    try {
      await customAxios.post("/users/register", {
        username: name,
        password: pwd
      });
      navigate('/login')

    } catch (err) {
      console.log(err);
    }

  };

  return (

    <div className="Register-container">
      <h1>Register</h1>
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
        <button type="submit">Register</button>
        <Link to="/login">
            Already have an account ? Go to login
        </Link>
      </form>
    </div>
  );
};

export default Register;
