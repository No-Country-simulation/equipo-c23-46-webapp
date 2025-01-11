import { CorsOptions } from "cors";
import { envs } from "./envs";

export const corsConfig: CorsOptions = {
  origin: '*'

  // origin: function (origin, callback) {
    // if (origin === envs.frontendUrl) {
    //   callback(null, true);
    // } else {
    //   callback(new Error('Not allowed by CORS'));
    // }
  // }
}
