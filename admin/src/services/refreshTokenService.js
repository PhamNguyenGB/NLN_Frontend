import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useSelector, useDispatch } from 'react-redux';
// import { loginStaff } from "../store/slice/userSlice";

// const staff = useSelector((state) => state.user.staff);
// const disPatch = useDispatch();

// let axiosJWT = axios.create();

// axiosJWT.interceptors.request.use(
//     async (config) => {
//         let date = new Date();
//         const decodeToken = jwtDecode(user.access_token)
//         if (decodeToken.exp < date.getTime() / 1000) {
//             const data = await refreshToken();
//             const refreshStaff = {
//                 ...staff,
//                 access_token: data.access_token,
//             }
//             disPatch(loginStaff(refreshStaff));
//             config.headers["access_token"] = "Bearer " + data.access_token;
//         }
//         return config;
//     },
//     (error) => { return Promise.reject(error); },
// );

const refreshToken = async () => {
    try {
        const res = await axios.post('http://localhost:8080/api/staff/refresh', {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export default refreshToken;
