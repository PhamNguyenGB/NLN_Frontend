import './Header.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypeProduct } from '../../redux/slices/productSlice';

const Header = () => {
    const user = useSelector((state) => state.user.user)
    const quantity = useSelector((state) => state.cart.quantity)
    const disPatch = useDispatch();

    const handleClickNameProduct = async (type) => {
        await disPatch(getTypeProduct(type));
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <header className="section-header">


                {/* <!-- header-top-light.// --> */}

                <section className="header-main border-bottom bg-white">
                    <div className="container-fluid">
                        <div className="row p-2 pt-3 pb-3 d-flex">
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-2">
                                <img className="d-none d-md-flex" src="https://i.imgur.com/R8QhGhk.png" width="100" />
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex form-inputs">
                                    <input className="form-control search-header" type="text" placeholder="Search any product..." />
                                    <i className="fa fa-search icon-search" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className='col-md-1'>
                                <i className="fa fa-phone text-primary" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                <h3 className='text-primary'>02877770049</h3>
                            </div>

                            <div className="col-md-2">
                                <div className="d-flex d-none d-md-flex flex-row align-items-center">
                                    <span className="login-res">
                                        {user ?
                                            <div style={{ fontSize: '16px' }}>
                                                {user.username}
                                                <i className="fa fa-user" aria-hidden="true" style={{ marginLeft: '10px' }}></i>
                                            </div>
                                            :
                                            <>
                                                <Link to='/login' className='login' >Đăng nhập /</Link>
                                                <Link to='/register' className='register'> Đăng ký</Link>
                                            </>
                                        }
                                    </span>
                                    <div className="d-flex flex-column ms-2">
                                        <Link className="qty" to='/cart' style={{ color: "#000" }}>
                                            <i className="fa fa-shopping-cart icon-shopping-cart position-relative" aria-hidden="true">
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "12px" }}>
                                                    {quantity !== 0 ? quantity : ''}
                                                </span>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 pt-3 pb-3 d-flex">
                            <div className='col-2'>

                            </div>
                            <div className='col-1 header-product'>
                                <br />
                                <Link to='/product/Mercedes' className="product-name" onClick={() => handleClickNameProduct('Mercedes')}>Mercedes</Link>
                            </div>
                            <div className='col-1 header-product'>
                                <br />
                                <Link to='/product/BMW' className="product-name" onClick={() => handleClickNameProduct('BMW')}>BMW</Link>
                            </div>
                            <div className='col-1 header-product'>
                                <br />
                                <Link to='/product/Bugatti' className="product-name" onClick={() => handleClickNameProduct('Bugatti')}>Bugatti</Link>
                            </div>
                            <div className='col-1 header-product'>
                                <br />
                                <Link to='/product/Rolls-Royce' className="product-name" onClick={() => handleClickNameProduct('Rolls-Royce')}>Rolls Royce</Link>
                            </div>
                            <div className='col-1 header-product'>
                                <br />
                                <Link to='/product/Porsche' className="product-name" onClick={() => handleClickNameProduct('Porsche')}>Porsche</Link>
                            </div>
                        </div>
                    </div>
                </section>


            </header>
        </>
    )
};

export default Header;