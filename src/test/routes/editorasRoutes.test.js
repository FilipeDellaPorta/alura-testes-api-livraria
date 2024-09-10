import { afterEach, beforeEach } from "@jest/globals"; //como vai rodar no jest não precisaria manter esta importação
import app from "../../app.js";

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});
