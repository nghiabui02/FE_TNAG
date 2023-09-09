import './loginCss.css'
import {Link, useNavigate} from "react-router-dom";
import { useFormik} from "formik";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../../service/userService";
import * as Yup from "yup";
import {useState} from "react";
import Register from "../register/register";


const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required')
});
export default function Login(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
         },
         validationSchema: LoginSchema,
         onSubmit: (values) => {
             console.log(values)
            if (values){
                handleLogin(values).then()
            } else {
                toast.error("Account not exist!")
            }
        }
    })
    const handleLogin =  async(values)=> {
         let a = await dispatch(login(values))
         console.log(a.payload.data)
         if (a.payload.data.token === "User is not exist" || a.payload.data.token === "Password is wrong"){
            toast.error("Account not exist!")
            navigate("/")
        }else {
            toast.success('Login success')
            navigate("/home")
         }
    }
    return(
        <>
            <div className='container-login' style={{marginTop:'100px'}}>
                <div className='header'>
                    <div className='title'>
                        <h1 className='text-4xl font-bold text-gray-900 dark:text-brown'>Choose your favourite meal</h1>
                        <p className='text-4xl font-thin text-gray-900 dark:text-white'>For the happy lunch</p>
                    </div>
                </div>

               {/*<div>Google</div>*/}

                <div className="box" style={{marginTop:'70px'}}>
                    <form onSubmit={formik.handleSubmit} className="login-form">
                        <div className="field">
                            <input value={formik.values.username}
                                   onChange={formik.handleChange} id="username" name='username' type="name" placeholder="Phone number, username, or email"/>
                            {formik.errors.username && formik.touched.username ? (
                                <div className="text-danger">{formik.errors.username}</div>
                            ) : null}
                            <label htmlFor="username">Phone number, username, or email</label>
                        </div>
                        <div className="field">
                            <input id="password" type="password" placeholder="password" name='password'
                                   value={formik.values.password}
                                   onChange={formik.handleChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type="submit" className="login-button" title="login">Log In</button>
                        <div className="separator">
                            <div className="line"></div>
                            <p>OR</p>
                            <div className="line"></div>
                        </div>
                        <div className="other">
                            <button className="fb-login-btn" type="button">
                                <i className="fa fa-facebook-official fb-icon"></i>
                                <span className="">Log in with Facebook</span>
                            </button>
                            <a className="forgot-password" href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}