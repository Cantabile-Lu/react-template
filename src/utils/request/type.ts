import type { AxiosError, AxiosResponse } from "axios";
import { InternalAxiosRequestConfig } from "axios";

export interface AxiosTransform {
  // 请求
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: AxiosError) => void;
  // 响应
  responseInterceptor?: (res: AxiosResponse<Result>) => AxiosResponse<Result>;
  responseInterceptorCatch?: (error: AxiosError) => void;

  transformResponseHook?: (res: AxiosResponse<Result>) => any;
}
export interface CreateAxiosOptions extends InternalAxiosRequestConfig {
  transform?: AxiosTransform;
}
export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  message: string;
  result: T;
}
