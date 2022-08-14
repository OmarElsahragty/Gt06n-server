import { connect } from "net";
// import gt06n from "./gt06n.mjs";

// const events = [
//   {
//     event: "01",
//     data: "009c00011a2b3c4d0001000001000000000000010000000100000a280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
//   },
//   {
//     event: "12",
//     data: "78781f12110709131f24ca056889fc034879e000347f00ff03697e0044870029e5530d0a",
//   },
//   {
//     event: "13",
//     data: "78780a134500640001005a987a0d0a",
//   },
//   {
//     event: "16",
//     data: "78782516110709131d23c9056889fc034879e000347f0900ff03697e004487510064000100227f830d0a",
//   },
// ];

// for (let i = 0; i < events.length; i++) {
//   let result = gt06n(events[i].data);
//   console.log(result);
// }

const socket = connect({
  port: "8090",
  host: "127.0.0.1",
})
  .on("error", function (err) {
    console.error("error", err);
    socket.end();
  })
  .on("connect", function () {
    console.log("connected");
    socket.write(
      Buffer.from(
        "474554202f20485454502f312e310d0a486f73743a206770730d0a436f6e6e656374696f6e3a20636c6f73650d0a0d0a",
        "hex"
      )
    );
  })
  .on("error", (err) => console.error(err))
  .on("data", function (data) {
    console.log("data:", data);
  });
