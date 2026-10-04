import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials:true
});

api.interceptors.response.use(
    (response) => {
        return response;
    },

    async (error) => {

        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                const response = await api.post("/refresh");

                const newAccessToken =
                    response.data.token;

                localStorage.setItem(
                    "token",
                    newAccessToken
                );

                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;

                return api(originalRequest);

            } catch (refreshError) {

                localStorage.removeItem("token");

                window.location.href = "/login";

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;