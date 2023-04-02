import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";

import {login} from "../../service/userService";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (value)=>{
        dispatch(login(value)).then((state)=>{
            if (state.payload.data !== "Sai tên đăng nhâp" && state.payload.data !== "Sai mật khẩu"){
                swal("Đăng nhập thành công!", {
                    icon: "success",
                }).then(()=>{return  navigate('/home')});

            }else {
                swal("Sai mật khẩu hoặc tài khoản!", {
                }).then(() => {
                    return navigate('/login')
                });
            }
        })
    }
    return (
        <div className={'row'}>

            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={(values)=>{handleLogin(values)}}
                >
                    <Form>
                        <div className="ml-3 form-group">
                            <label htmlFor="exampleInputUsername">User Name: </label>
                            <Field type='text' className={'form-control'} name={'username'}/>
                        </div>
                        <div className="ml-3 form-group">
                            <label htmlFor="exampleInputPassword">Password: </label>
                            <Field type='text' className={'form-control'} name={'password'}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="submit" className="btn btn-primary" style={{marginLeft: 10}}>
                            <Link to={'/register'} style={{textDecoration:'none', color:'red'}}>Register</Link>
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}