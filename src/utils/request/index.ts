import axios from "axios";
import type { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { CreateAxiosOptions, Result } from "./type.ts";
class Request {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);

    this.setupInterceptors();
  }
  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  // global interceptor
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    const {
      requestInterceptor,
      requestInterceptorCatch,
      responseInterceptor,
      responseInterceptorCatch
    } = transform;
    this.axiosInstance.interceptors.request.use((config) => {
      // TODO 是否需要全局loading?
      if (requestInterceptor) {
        console.log(`🚀🚀🚀🚀🚀-> in index.ts on 39`, "global");
        config = requestInterceptor(config);
      }
      return config;
    }, undefined);
    // has requestInterceptorCatch
    requestInterceptorCatch &&
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorCatch
      );

    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (responseInterceptor) {
          res = responseInterceptor(res);
        }
        return res.data;
      },
      (error: AxiosError) => {
        if (responseInterceptorCatch) {
          responseInterceptorCatch(error);
        }
      }
    );
  }
  // single interceptor
  request<T = any>(config: CreateAxiosOptions): Promise<T> {
    return new Promise((resolve, reject) => {
      const { transform } = config;

      if (transform && transform.requestInterceptor) {
        config = transform.requestInterceptor(config);
      }

      this.axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          if (transform && transform.responseInterceptor) {
            res = transform.responseInterceptor(res);
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T>(config: CreateAxiosOptions): Promise<T> {
    return this.request({ ...config, method: "get" });
  }
  post<T>(config: CreateAxiosOptions): Promise<T> {
    return this.request({ ...config, method: "post" });
  }
  put<T>(config: CreateAxiosOptions): Promise<T> {
    return this.request({ ...config, method: "put" });
  }
  delete<T>(config: CreateAxiosOptions): Promise<T> {
    return this.request({ ...config, method: "delete" });
  }
}
export default Request;
