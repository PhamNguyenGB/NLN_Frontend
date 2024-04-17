import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetAllProducts } from '../../store/slice/productSlice';
import ModalProduct from './modalProduct';
import numeral from 'numeral';
import ModalDeleteProduct from './modalDeleteProduct';

const Product = () => {

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.products.loading);
    const products = useSelector((state) => state.products.products);
    const error = useSelector((state) => state.products.error);

    const [isShowModalProduct, setIsShowModalProduct] = useState(false);
    const [actionModalProduct, setActionModalProduct] = useState("CREATE");
    const [dataModelProduct, setDataModelProduct] = useState({});

    // Delete modal 
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataModel, setDataModel] = useState({});

    useEffect(() => {
        dispatch(fetAllProducts());
    }, [])

    const onHideModalProduct = async () => {
        setIsShowModalProduct(false);
        setDataModelProduct({});
        await dispatch(fetAllProducts());
    };

    const handleUpdateProduct = (product) => {
        console.log(product);
        setActionModalProduct("UPDATE");
        setDataModelProduct(product);
        setIsShowModalProduct(true);
    };

    const handleCloseModalDelete = () => {
        setIsShowModalDelete(false);
        setDataModel({});
    }

    const handleDeleteProduct = (product) => {
        setIsShowModalDelete(true);
        console.log(product);
        setDataModel(product);
    };

    const formatNumber = (number) => {
        return numeral(number).format('0,0');
    }

    return (
        <>
            <div id="page-top position-relative">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                        </a>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></NavLink>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Products --> */}
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/product">
                                <i className="fa fa-brands fa-product-hunt"></i>
                                <span>Products manager</span></NavLink>
                        </li>

                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Order --> */}
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/order">
                                <i className="fa fa-th" aria-hidden="true"></i>
                                <span>Orders manager</span></NavLink>
                        </li>

                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Components</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Components:</h6>
                                    <a className="collapse-item" href="buttons.html">Buttons</a>
                                    <a className="collapse-item" href="cards.html">Cards</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Utilities</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Addons
                        </div>

                        {/* <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>

                        {/* <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                    </ul>
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/* <!-- Page Heading --> */}
                                <h1 className="h3 mb-2 text-gray-800">QUẢN LÍ SẢN PHẨM</h1>
                                <div className="row">
                                    <div className="col-10"></div>
                                    <button className="col-2 m-3 btn btn-primary" style={{ width: "200px" }}
                                        onClick={() => {
                                            setIsShowModalProduct(true);
                                            setActionModalProduct("CREATE");
                                        }}
                                    >+Add new product</button>
                                </div>

                                {/* <!-- DataTales Example --> */}
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Sản phẩm</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>Price</th>
                                                        <th></th>

                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>Price</th>

                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    {loading === false && error === null && products ?
                                                        <>
                                                            {products.data.Data.map((item, index) => {
                                                                return (
                                                                    <tr key={`product-${index}`}>
                                                                        <td>{item.id}</td>
                                                                        <td>
                                                                            <img
                                                                                src={item.image} className="img-thumbnail image-product" alt="..." style={{ width: "100px" }} />
                                                                        </td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.type}</td>
                                                                        <td>{formatNumber(item.price)} đ</td>
                                                                        <td style={{ width: "200px" }}>
                                                                            <span>
                                                                                <button className=" btn btn-success ml-5" onClick={() => handleUpdateProduct(item)}>
                                                                                    <i className="fa fa-solid fa-pencil"></i>
                                                                                </button>
                                                                                <button className=" btn btn-danger ml-3" onClick={() => handleDeleteProduct(item)}>
                                                                                    <i className="fa fa-solid fa-trash"></i>
                                                                                </button>
                                                                            </span>
                                                                        </td>

                                                                    </tr>

                                                                )
                                                            })}
                                                        </>
                                                        :
                                                        <>
                                                            <tr>
                                                                <td>data isLoading...</td>
                                                            </tr>
                                                        </>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/* <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {isShowModalProduct === true ?
                <>
                    <ModalProduct
                        isShowModalProduct={isShowModalProduct}
                        onHide={onHideModalProduct}
                        action={actionModalProduct}
                        dataModelProduct={dataModelProduct}

                    />
                </>
                :
                <></>
            }

            {isShowModalDelete === true ?
                <>
                    <ModalDeleteProduct
                        isShowModalDelete={isShowModalDelete}
                        handleCloseModalDelete={handleCloseModalDelete}
                        dataModel={dataModel}

                    />
                </>
                :
                <></>
            }

        </>

    );
}

export default Product;
