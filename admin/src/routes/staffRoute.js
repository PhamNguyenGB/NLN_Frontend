import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Login from "../components/Login/Login";

const StaffRoute = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
};

export default StaffRoute;