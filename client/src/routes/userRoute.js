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

const UserRoute = () => {
    return (
        <>
            <Switch>
                <Route path="/product/:name/:id">
                    <ProductDetail />
                </Route>
                <Route path="/product/:type">
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