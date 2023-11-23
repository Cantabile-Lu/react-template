import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";
import type { AxiosOptions } from "./type.ts";

import { Result } from "#/axios";

export default class Request {
  private axiosInstance: AxiosInstance;
  private readonly options: AxiosOptions;
  constructor(options: AxiosOptions) {
    this.axiosInstance = axios.create(options);
    this.options = options;
    this.setupInterceptors();
  }

  setupInterceptors() {
    // 定义拦截器
    const {
      options: { transform },
      axiosInstance
    } = this;
    // 如果没有自定义拦截器则返回
    if (!transform) {
      return;
    }
    // 解包拦截器
    const {
      requestInterceptor,
      requestInterceptorCatch,
      responseInterceptor,
      responseInterceptorCatch
    } = transform;
    /**
     * @description 全局请求拦截
     */
    axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (requestInterceptor) {
          config = requestInterceptor(config);
        }
        return config;
      },
      (error) => {
        if (requestInterceptorCatch) {
          requestInterceptorCatch(error);
        }
      }
    );
    /**
     * @description 全局响应拦截
     */
    axiosInstance.interceptors.response.use(
      (res) => {
        if (responseInterceptor) {
          res = responseInterceptor(res);
        }
        return res;
      },
      (error) => {
        if (responseInterceptorCatch) {
          responseInterceptorCatch(error);
        }
      }
    );
  }

  /**
   * @description 单个实列请求
   */
  request<T = any>(config: AxiosOptions): Promise<Result<T>> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res) => {
          const { transform } = config;
          if (transform && transform.responseInterceptor) {
            res = transform.responseInterceptor(res);
          }
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get<T>(config: AxiosOptions): Promise<Result<T>> {
    return this.request({ ...config, method: "get" });
  }
  post<T>(config: AxiosOptions): Promise<Result<T>> {
    return this.request({ ...config, method: "post" });
  }
  put<T>(config: AxiosOptions): Promise<Result<T>> {
    return this.request({ ...config, method: "put" });
  }
  delete<T>(config: AxiosOptions): Promise<Result<T>> {
    return this.request({ ...config, method: "delete" });
  }
}
