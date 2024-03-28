// import Statistic from "./components/Statistic/statistic";
// import Login from "./components/Login/Login";
import Nav from "./components/Navigation/nav";
import StaffRoute from "./routes/staffRoute";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const staff = useSelector((state) => state.user.staff);




  return (
    <Router>
      {staff ?
        <div className="App-header">
          <Nav />
        </div>
        :
        <>
        </>
      }
      <div className="App-body">
        <StaffRoute />
      </div>
    </Router>
  );
}

export default App;
