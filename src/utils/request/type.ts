import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

export interface AxiosTransform {
  // 请求
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  // 请求失败
  requestInterceptorCatch?: (error: AxiosError) => void;
  // 响应
  responseInterceptor?: (res: AxiosResponse<any>) => AxiosResponse<any>;
  // 响应失败
  responseInterceptorCatch?: (error: AxiosError) => void;
}
export interface AxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
}
