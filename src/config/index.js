import { get } from "lodash";

import app from "./app";

const options = {
  app,
};

export default function config(key) {
  return get(options, key);
}
