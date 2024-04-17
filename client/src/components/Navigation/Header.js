import './Header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypeProduct, searchProducts } from '../../redux/slices/productSlice';
import Dropdown from 'react-bootstrap/Dropdown';
import { logout } from '../../redux/slices/userSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const user = useSelector((state) => state.user.user);
    const quantity = useSelector((state) => state.cart.quantity);
    const [search, setSearch] = useState('');
    const disPatch = useDispatch();
    const history = useHistory();

    const handleClickNameProduct = async (type) => {
        await disPatch(getTypeProduct(type));
    }

    const handleLogout = () => {
        disPatch(logout(user.access_token));
    };

    const handleClickYourOrder = async () => {
        history.push('/order')
    }

    const handleSearch = async () => {
        disPatch(searchProducts({ name: search }));
        history.push(`/search/${search}`);
    };

    const handlePressEnter = (event) => {
        if (event.keyCode === 13 && event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
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
                                <Link to='/' className='logo'></Link>
                            </div>
                            <div className="col-md-4">
                                <form className="d-flex form-inputs">
                                    <input
                                        onChange={(e) => setSearch(e.target.value)} value={search}
                                        className="form-control search-header" type="text" placeholder="Tìm kiếm sản phẩm..."
                                        onKeyDown={(event) => handlePressEnter(event)}
                                    />
                                    <i onClick={handleSearch} className="fa fa-search icon-search" aria-hidden="true"></i>
                                </form>
                            </div>
                            <div className='col-md-1'>
                                <i className="fa fa-phone text-primary" style={{ fontSize: '14px' }} aria-hidden="true"></i>
                                <h3 className='text-primary'>02877770049</h3>
                            </div>

                            <div className="col-md-3">
                                <div className="d-flex d-none d-md-flex flex-row align-items-center">
                                    <span className="login-res">
                                        {user ?
                                            <>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ fontSize: '16px' }}>
                                                        {user.username}
                                                        <i className="fa fa-user" variant="success" id="dropdown-basic" style={{ marginLeft: '10px' }}></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu style={{ width: '200px' }}>
                                                        <Dropdown.Item className='item-drop'>Thông tin</Dropdown.Item>
                                                        <Dropdown.Item className='item-drop' onClick={() => handleClickYourOrder()}>Đơn hàng của bạn</Dropdown.Item>
                                                        <hr />
                                                        <Dropdown.Item className='item-drop' onClick={() => handleLogout()}>Đăng xuất</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </>
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