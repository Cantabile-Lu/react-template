import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";
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
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (requestInterceptor) {
          console.log(`🚀🚀🚀🚀🚀-> in index.ts on 39`, "global");
          config = requestInterceptor(config);
        }
        return config;
      },
      undefined
    );
    // has requestInterceptorCatch
    requestInterceptorCatch &&
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorCatch
      );

    this.axiosInstance.interceptors.response.use((res: AxiosResponse) => {
      if (responseInterceptor) {
        res = responseInterceptor(res);
      }
      return res;
    }, undefined);

    responseInterceptorCatch &&
      this.axiosInstance.interceptors.response.use(undefined, (error) => {
        responseInterceptorCatch(error);
      });
  }
  // single interceptor
  request(config: CreateAxiosOptions): void {
    const { transform } = config;

    if (transform && transform.requestInterceptor) {
      config = transform.requestInterceptor(config);
    }

    this.axiosInstance.request(config).then((res) => {
      if (transform && transform.responseInterceptor) {
        res = transform.responseInterceptor(res);
      }
      return res;
    });
  }
}
export default Request;
