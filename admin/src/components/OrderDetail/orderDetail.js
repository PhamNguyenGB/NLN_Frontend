import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './orderDetail.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const OrderDetail = () => {
    const history = useHistory();

    const products_OD = useSelector((state) => state.orderDetail.products);
    const shipping = useSelector((state) => state.orderDetail.shipping);
    const totalAmout = useSelector((state) => state.orderDetail.totalAmout);

    const handleGoBack = () => {
        history.goBack();
    };


    return (
        <>
            <div id="page-top position-relative">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <section className="h-100 gradient-custom">
                            <div className="container py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-lg-10 col-xl-8">
                                        <div className="card" style={{ borderRadius: "10px" }}>
                                            <div className="card-header px-4 py-5">
                                                <NavLink to='#' style={{ color: '#a8729a', textDecoration: 'none' }} onClick={() => handleGoBack()}> <i className="fa fa-arrow-left" aria-hidden="true"></i> Go back</NavLink>
                                            </div>
                                            <div className="card-body p-4">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>Receipt</p>
                                                    <p className="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>
                                                </div>
                                                {products_OD ?
                                                    <>
                                                        {products_OD.map((item, index) => {
                                                            return (
                                                                <div className="card shadow-0 border mb-4" key={`orderDetail-${index}`}>
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-md-2">
                                                                                <img src={item.Product?.image}
                                                                                    className="img-fluid" alt="Phone" />
                                                                            </div>
                                                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                <p className="text-muted mb-0">{item.Product.name}</p>
                                                                            </div>
                                                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                <p className="text-muted mb-0 small">Price: {item.price}</p>
                                                                            </div>
                                                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                <p className="text-muted mb-0 small">Type: {item.Product?.type}</p>
                                                                            </div>
                                                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
                                                                            </div>
                                                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                <p className="text-muted mb-0 small">{item.price * item.quantity}</p>
                                                                            </div>
                                                                        </div>
                                                                        <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} />
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </>
                                                    :
                                                    <>
                                                        ...isLoading
                                                    </>
                                                }
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-2">
                                                        <p className="text-muted mb-0 small">Track Order</p>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="progress" style={{ height: "6px", borderRadius: "16px" }}>
                                                            <div className="progress-bar" role="progressbar"
                                                                style={{ width: "65%", borderRadius: "16px", backgroundColor: "#a8729a" }} aria-valuenow="65"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <div className="d-flex justify-content-around mb-1">
                                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between pt-2">
                                                    <p className="fw-bold mb-0"></p>
                                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span>{totalAmout}</p>
                                                </div>

                                                <div className="d-flex justify-content-between mb-5">
                                                    <p className="fw-bold mb-0"></p>
                                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> {shipping}</p>
                                                </div>
                                            </div>
                                            <div className="card-footer border-0 px-4 py-5"
                                                style={{ backgroundColor: "#a8729a", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                                                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                                    paid: <span className="h2 mb-0 ms-2">{shipping + totalAmout}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- End of Main Content --> */}
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
        </>
    )
}

export default OrderDetail;