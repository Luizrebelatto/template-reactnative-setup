import axios, { InternalAxiosRequestConfig } from "axios";

import ApiConfig from "../config/api.config";

const createApiInstance = (
	baseURL: string,
) => {
	interface StatusMessages {
		[key: number]: string;
	}

	const axiosInstance = axios.create({
		baseURL,
	});
	
		axiosInstance.interceptors.request.use(
			async (config: InternalAxiosRequestConfig) => {
				return config;
			},
		);

		axiosInstance.interceptors.response.use(
			(response: any) => {
				return response;
			},
			async (error) => {
				return Promise.reject(error);
			},
		);
	
	return axiosInstance;
};


const api = () => createApiInstance(ApiConfig.BASE_URL);

export { api }