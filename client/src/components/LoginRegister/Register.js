import './Register.scss';
import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaulValidInput = {
        isValidUsername: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isValidPhone: true,
        isValidAddress: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaulValidInput);
    const [messError, setMessError] = useState('');

    let history = useHistory();
    const disPath = useDispatch();
    const error = useSelector((state) => state.user.error)
    const [messSuccess, setMessSuccess] = useState('');

    const isValidateInputs = () => {
        setObjCheckInput(defaulValidInput)
        if (!username) {
            setMessError('Vui lòng nhập vào tên đăng nhập');
            setObjCheckInput({ ...defaulValidInput, isValidUsername: false });
            return false;
        }
        if (!address) {
            setMessError('Vui lòng nhập vào địa chỉ');
            setObjCheckInput({ ...defaulValidInput, isValidAddress: false });
            return false;
        }
        if (!phone) {
            setMessError('Vui lòng nhập vào số điện thoại');
            setObjCheckInput({ ...defaulValidInput, isValidPhone: false });
            return false;
        }
        if (!password) {
            setMessError('Vui lòng nhập vào mật khẩu');
            setObjCheckInput({ ...defaulValidInput, isValidPassword: false });
            return false;
        }
        if (password !== confirmPassword) {
            setMessError('Nhập lại mật khẩu chưa chính xác');
            setObjCheckInput({ ...defaulValidInput, isValidConfirmPassword: false });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let check = isValidateInputs();
        if (check === true) {
            const dataUser = { username, address, phone, password };
            let response = await disPath(register(dataUser))
            if (response.payload.ErrC === 0) {
                setMessSuccess(response.payload.Mess)
                setTimeout(() => {
                    history.push('/login');
                }, 1000)
            } else {
                if (response.payload.Mess === 'Tên tài khoản đã tồn tại') {
                    setObjCheckInput({ ...defaulValidInput, isValidUsername: false });
                    setMessError(response.payload.Mess);
                } else if (response.payload.Mess === 'Số điện thoại đã được sử dụng') {
                    setObjCheckInput({ ...defaulValidInput, isValidPhone: false });
                    setMessError(response.payload.Mess);
                }
            }
        }
        return;
    };

    return (
        <>
            <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark register img" style={{
                minHeight: "100vh", backgroundSize: "cover",

            }}>
                <div className="container-fluid">
                    <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
                        <div className="col-12 col-md-4 col-lg-3   h-50 ">
                            <div className="card shadow">
                                <div className="card-body mx-auto">
                                    <h4 className="card-title mt-3 text-center h1">Đăng ký tài khoản</h4>
                                    <p className='mt-5'>
                                        <button className="btn btn-block btn-info font-18">
                                            <i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</button>
                                        <button className="btn btn-block btn-primary font-18">
                                            <i className="fa fa-facebook" aria-hidden="true"></i> Login with facebook</button>
                                    </p>
                                    <p className="text-muted font-weight-bold ">
                                        <span>OR</span>
                                    </p>
                                    <form>
                                        <div className="form-group input-group ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-user" style={{ fontSize: "24px" }}></i> </span>
                                            </div>
                                            <input name=""
                                                className={objCheckInput.isValidUsername === true ? "form-control" : "form-control is-invalid"}
                                                placeholder="Tên đặng nhập" type="text" style={{ fontSize: "12px" }}
                                                value={username} onChange={(event) => setUsername(event.target.value)}
                                            />
                                        </div>
                                        <div hidden={objCheckInput.isValidUsername} className='text-danger' style={{ fontSize: "14px" }}>{messError}</div>

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-address-book-o" aria-hidden="true" style={{ fontSize: "24px" }}></i> </span>
                                            </div>
                                            <input name=""
                                                className={objCheckInput.isValidAddress === true ? "form-control" : "form-control is-invalid"}
                                                placeholder="Địa chỉ" type="text" style={{ fontSize: "12px" }}
                                                value={address} onChange={(event) => setAddress(event.target.value)}
                                            />
                                        </div>
                                        <div hidden={objCheckInput.isValidAddress} className='text-danger' style={{ fontSize: "14px" }}>{messError}</div>

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-mobile" aria-hidden="true" style={{ fontSize: "24px" }}></i> </span>
                                            </div>
                                            <input name=""
                                                className={objCheckInput.isValidPhone === true ? "form-control" : "form-control is-invalid"}
                                                placeholder="Số điện thoại" type="text" style={{ fontSize: "12px" }}
                                                value={phone} onChange={(event) => setPhone(event.target.value)}
                                            />
                                        </div>
                                        <div hidden={objCheckInput.isValidPhone} className='text-danger' style={{ fontSize: "14px" }}>{messError}</div>

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-lock" style={{ fontSize: "24px" }}></i> </span>
                                            </div>
                                            <input
                                                className={objCheckInput.isValidPassword === true ? "form-control" : "form-control is-invalid"}
                                                placeholder="Mật khẩu" type="password" style={{ fontSize: "12px" }}
                                                value={password} onChange={(event) => setPassword(event.target.value)}
                                            />
                                        </div>
                                        <div hidden={objCheckInput.isValidPassword} className='text-danger' style={{ fontSize: "14px" }}>{messError}</div>

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-lock" style={{ fontSize: "24px" }}></i> </span>
                                            </div>
                                            <input
                                                className={objCheckInput.isValidConfirmPassword === true ? "form-control" : "form-control is-invalid"}
                                                placeholder="Nhập lại mật khẩu" type="password" style={{ fontSize: "12px" }}
                                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                                            />
                                        </div>
                                        <div
                                            hidden={objCheckInput.isValidConfirmPassword}
                                            className='text-danger' style={{ fontSize: "14px" }}>{messError}
                                        </div>

                                        <div
                                            hidden={messSuccess !== '' ? false : true}
                                            className='text-success' style={{ fontSize: "14px" }}>{messSuccess}
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block font-18" onClick={(e) => handleSubmit(e)}>Tạo tài khoản </button>
                                        </div>
                                        <p className="text-center">Bạn đã có tài khoản?
                                            <a href="/login">Đăng nhập</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};

export default Register;