import Statistic from "./components/Statistic/statistic";
import Login from "./components/Login/Login";
import Nav from "./components/Navigation/nav";
import StaffRoute from "./routes/staffRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <StaffRoute />
      </div>
    </Router>
  );
}

export default App;
