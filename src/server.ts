import { createServer } from "node:http";
import app from "./app";
import config from "./config";

import initRealtimeDatabase from "./services/realtimeDatabase";
import initSocketIO from "./services/socketImplentation";

const server = createServer(app);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);

  initRealtimeDatabase();

  initSocketIO(server);
});
