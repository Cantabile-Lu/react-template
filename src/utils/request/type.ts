import type { AxiosResponse } from "axios";
import { InternalAxiosRequestConfig } from "axios";

export interface AxiosTransform {
  // 请求
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: Error) => void;
  // 响应
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: Error) => void;
}
export interface CreateAxiosOptions extends InternalAxiosRequestConfig {
  transform?: AxiosTransform;
}
