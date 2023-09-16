import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";
import socketMiddleware from "../socket/socketMiddleware";

const middleware = [socketMiddleware];

export default configureStore({
  reducer: {
    chat: chatReducer,
  },
  middleware,
});
