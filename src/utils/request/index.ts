import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { CreateAxiosOptions } from "./type.ts";

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
  private setupInterceptors() {
    // TODO 拆分为函数
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform;

    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (requestInterceptors) {
          config = requestInterceptors(config);
        }
        return config;
      },
      undefined
    );

    this.axiosInstance.interceptors.response.use(
      responseInterceptors,
      responseInterceptorsCatch
    );
  }
  request(config: AxiosRequestConfig): void {
    this.axiosInstance.request(config).then((res) => {
      console.log(`🚀🚀🚀🚀🚀-> in index.ts on 11`, res);
    });
  }
}
export default Request;
