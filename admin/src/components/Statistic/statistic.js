import './sb-admin-2.min.css';
import { NavLink } from 'react-router-dom';
import { statisticUsers, statisticMoneyMonth, statisticMoneyYear, getTotalQuantity } from '../../store/slice/statisticSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import StatisticUserTable from './statisticUsersTable';
import StatisticMoneyTable from './statisticMoneyTable';


function Statistic() {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const staff = useSelector((state) => state.user.staff);

    const dispatch = useDispatch();

    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    //show table
    const [showTableUser, setShowTableUser] = useState(true);
    const [showTableMoney, setShowTableMoney] = useState(true);
    const [actionTableMoney, setActionTableMoney] = useState("");

    const handleClickShowTableUser = () => {
        setShowTableMoney(true);
        setShowTableUser(false);
    }

    const handleClickShowTableMoney = (action) => {
        setShowTableUser(true);
        setShowTableMoney(false);
        if (action === 'month') {
            setActionTableMoney('month');
        } else {
            setActionTableMoney('year');
        }
    }

    useEffect(() => {
        dispatch(statisticUsers({ access_token: staff.access_token }));
        dispatch(statisticMoneyMonth({ month, access_token: staff.access_token }));
        dispatch(statisticMoneyYear({ year, access_token: staff.access_token }));
        dispatch(getTotalQuantity({ access_token: staff.access_token }));
    }, []);

    const users = useSelector((state) => state.statistic.totalUsers?.totalUsers);
    const moneyMonth = useSelector((state) => state.statistic.moneyMonth?.Data);
    const moneyYear = useSelector((state) => state.statistic.moneyYear?.Data);
    const totalQuantity = useSelector((state) => state.statistic.totalQuantity?.totalQuantity);

    return (
        <>
            <div id="page-top">

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
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">THỐNG KÊ</h1>
                                    {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                                </div>

                                {/* <!-- Content Row --> */}
                                <div className="row">

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4" onClick={() => handleClickShowTableMoney('month')}>
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Doanh thu (tháng {currentMonth})</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{moneyMonth}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4" onClick={() => handleClickShowTableMoney('year')}>
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            Doanh thu (năm {currentYear})</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{moneyYear}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4" role='button' onClick={() => handleClickShowTableUser()}>
                                        <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tổng số người dùng
                                                        </div>
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{users}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa fa-user fa-2x text-gray-300" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                            Tổng sản phẩm đã bán</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalQuantity}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa fa-car fa-2x text-gray-300" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Content Row --> */}

                            </div>
                            {/* <!-- /.container-fluid --> */}
                            <StatisticUserTable
                                showTableUser={showTableUser}
                            />
                            <StatisticMoneyTable
                                showTableMoney={showTableMoney}
                                actionTableMoney={actionTableMoney}
                            />

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

            </div >

        </>

    );
}

export default Statistic;
