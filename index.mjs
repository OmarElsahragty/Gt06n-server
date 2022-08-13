import net from "net";
import gt06n from "./gt06n.mjs";

const server = net
  .createServer((connection) => {
    connection.setEncoding("hex");
    connection.on("data", (data) => {
      let result = gt06n(data);
      console.log(result);
    });
  })
  .on("error", (err) => {
    console.error(err);
    connection.end();
  })
  .listen(8090);
