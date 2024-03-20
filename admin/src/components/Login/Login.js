// import '../sb-admin-2.min.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStaff } from '../../store/slice/userSlice';
const Login = () => {
    const history = useHistory();

    const [staffname, setStaffname] = useState('');
    const [password, setPassword] = useState('');

    const defaultObjInput = {
        isValidStaffname: true,
        isValidPassword: true,
        isValidLogin: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultObjInput);
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.user)

    const handleStaffname = (data) => {
        setStaffname(data);
    };

    const handlePassword = (data) => {
        setPassword(data);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setObjCheckInput(defaultObjInput)
        if (!staffname) {
            setObjCheckInput({ ...defaultObjInput, isValidStaffname: false })
            return;
        }
        if (!password) {
            setObjCheckInput({ ...defaultObjInput, isValidPassword: false })
            return;

        }
        let userCredentials = {
            staffname,
            password,
        }
        const res = await dispatch(loginStaff(userCredentials));
        if (+res.payload.ErrC !== 0) {
            setObjCheckInput({ ...defaultObjInput, isValidLogin: false });

            return;
        }
        setStaffname('');
        setPassword('');
        history.push('/');

        return;
    }

    return (
        <>
            <div className="mt-5">

                <div className="container">

                    {/* <!-- Outer Row --> */}
                    <div className="row justify-content-center">

                        <div className="col-xl-10 col-lg-12 col-md-9 bg-gradient-primary">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* <!-- Nested Row within Card Body --> */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block">
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="text"
                                                            className={objCheckInput.isValidStaffname ? "form-control form-control-user" : "form-control form-control-user is-invalid"}
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="Enter staffname"
                                                            value={staffname}
                                                            onChange={(e) => handleStaffname(e.target.value)}
                                                        />
                                                        <div className='text-danger' hidden={objCheckInput.isValidStaffname}>Bạn chưa nhập vào staffname</div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"
                                                            className={objCheckInput.isValidPassword ? "form-control form-control-user" : "form-control form-control-user is-invalid"}
                                                            id="exampleInputPassword" placeholder="Password" value={password}
                                                            onChange={(e) => handlePassword(e.target.value)}
                                                        />
                                                        <div className='text-danger' hidden={objCheckInput.isValidPassword}>Bạn chưa nhập vào password</div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                            <label className="custom-control-label" htmlFor="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div>
                                                    <div className='text-danger' hidden={objCheckInput.isValidLogin}>{error}</div>
                                                    <button className="btn btn-primary btn-user btn-block" type='submit' onClick={(e) => handleLogin(e)}>
                                                        {loading ? "Loading..." : "Login"}
                                                    </button>
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;