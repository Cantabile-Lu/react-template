import type { AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class AxiosTransform {
  // 请求
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: Error) => void;
  // 响应
  responseInterceptors?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (
    axiosInstance: AxiosResponse,
    error: Error
  ) => void;
}
export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
}
