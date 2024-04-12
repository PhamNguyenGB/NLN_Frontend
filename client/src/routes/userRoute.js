import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import HomePage from "../components/HomePage/Home";
import Products from "../components/Product/Products";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import Cart from "../components/Cart/Cart";
import PrivateRoute from "./privateRoute";
import Order from "../components/Order/order";
import OrderDetail from "../components/OrderDetail/orderDetail";
import Search from "../components/Search/search";

const UserRoute = () => {
    return (
        <>
            <Switch>
                <PrivateRoute path="/order/:id" component={OrderDetail} exact />
                <PrivateRoute path="/order" component={Order} exact />
                <PrivateRoute path='/cart' component={Cart} />
                <Route path="/product/:name/:id">
                    <ProductDetail />
                </Route>
                <Route path="/search/:name" exact>
                    <Search />
                </Route>
                <Route path="/product/:type" exact>
                    <Products />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
}

export default UserRoute;