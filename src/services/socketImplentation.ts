import { Server } from "socket.io";

export default function initSocketIO(server: any) {
  const io = new Server(server, {
    path: "/ws/price/socket.io",
    cors: {
      origin: "*",
      methods: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("🚀 ~ io.on ~ socket:", socket.id);
  });
}
