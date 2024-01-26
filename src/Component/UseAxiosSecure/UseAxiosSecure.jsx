import axios from "axios";
import { Navigate } from "react-router-dom";

    const axiosSecure = axios.create({
        baseURL: "https://doc-house-server-iota.vercel.app",
    })
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("docToken")
            if (token) {
                config.headers.Authorization =`bearer ${token}`
            }
            return config
        })
        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
              if (error.response && (error.response.status=== 401 || error.response.status===403)) {
                Navigate("/")
              }
          })

export default axiosSecure