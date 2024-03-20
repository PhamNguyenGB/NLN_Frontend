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
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { loginStaff } from "./store/slice/userSlice";

const App = () => {
  const staff = useSelector((state) => state.user.staff);
  const disPatch = useDispatch();


  const refreshToken = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/staff/refresh', {
        withCredentials: true,
      });
      console.log('check response', res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodeToken = jwtDecode(staff.access_token)
      if (decodeToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshStaff = {
          ...staff,
          access_token: data.access_token,
        }
        disPatch(loginStaff(refreshStaff));
        config.headers["access_token"] = "Bearer " + data.access_token;
      }
      return config;
    },
    (error) => { return Promise.reject(error); },
  );



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
