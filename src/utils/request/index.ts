import Request from "./Axios.ts";
const server = new Request({
  timeout: 10 * 1000,
  transform: {
    // instance  interceptor
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (config) => {
      return config;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export { server };
