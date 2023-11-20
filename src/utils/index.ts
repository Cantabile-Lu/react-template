import Request from "./request/index.ts";

const server = new Request({
  timeout: 10 * 1000,
  transform: {
    requestInterceptors: (config) => {
      return config;
    },
    requestInterceptorsCatch: (err) => {
      return err;
    },

    responseInterceptors: (config) => {
      return config;
    },
    responseInterceptorsCatch: (err) => {
      return err;
    }
  }
});
export { server };
