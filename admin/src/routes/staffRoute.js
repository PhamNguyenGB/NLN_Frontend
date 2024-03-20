import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Login from "../components/Login/Login";
import Statistic from "../components/Statistic/statistic";
import PrivateRoute from "./privateRoute";
import Product from "../components/Products/product";

const StaffRoute = () => {
    return (
        <>
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
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