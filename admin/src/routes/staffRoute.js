import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Login from "../components/Login/Login";
import Statistic from "../components/Statistic/statistic";
import PrivateRoute from "./privateRoute";
import Product from "../components/Products/product";
import Order from "../components/Order/order";
import OrderDetail from "../components/OrderDetail/orderDetail";

const StaffRoute = () => {
    return (
        <>
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <PrivateRoute path="/orderDetail/:id" component={OrderDetail} />
                <PrivateRoute path="/order" component={Order} />
                <PrivateRoute path="/product" component={Product} />
                <PrivateRoute path="/" component={Statistic} />
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
};

export default StaffRoute;