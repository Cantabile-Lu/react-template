import Request from "./request/index.ts";

const server = new Request({
  timeout: 10 * 1000,
  transform: {
    // instance  interceptor
    requestInterceptor: (config) => {
      console.log(`🚀🚀🚀🚀🚀-> in index.ts on 7`, "instance");
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
