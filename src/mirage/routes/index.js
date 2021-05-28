import userRouter from "./userRouter";

const baseURL = process.env.REACT_APP_API_BASE_URL || 4200;

const RoutesHandlers = [...userRouter];

export default function routes() {
  this.namespace = "api";
  this.urlPrefix = `${baseURL}`;
  this.timing = 1000;

  RoutesHandlers.forEach(({ type, url, handler, response }) => {
    this[type](url, handler, response);
  });

  this.passthrough();
}
