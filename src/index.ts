import { SerialPort } from "serialport";

// Create a port
const port = new SerialPort({
  path: "/dev/tty.usbserial-0001",
  // path: "/",
  baudRate: 9600,
  autoOpen: true,
});

// Write the data to the serial port
// port.write("ROBOT POWER ON");

// port.write("ROBOT POWER ON")

// port.on('error', function(err) {
//   console.log('Error: ', err.message)
// })

const start = () => {
  if (port.isOpen) {
    console.log("already open");
    return;
  }
  port.open((err) => {
    // if (err) {
    //   return console.log("Error opening port: ", err.name, err.message);
    // }
    if (err) {
      console.log("is open", port.isOpen);
      console.log("is open", port.isOpen);
      console.log(err?.message);
      console.log(err?.name);
      console.log("is open", port.isOpen);
      console.log(port.baudRate);
      console.log(port.baudRate);
      // throw new Error(err.message);
    }

    // Because there's no callback to write, write errors will be emitted on the port:

    // port.write(":L00((255,000,000)\r\n)");
  });
};

setInterval(() => {
  start();
  if (port.isOpen) {
    console.log("to write");
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const red = "255,000,000";
    const green = "000,255,000";
    const blue = "000,000,255";
    const command = `:L00(${blue})\r\n)`;

    port.write(command, (err) => {
      // if (error) console.log(error?.message);

      if (err) {
        return console.log("Error on write: ", err.message);
      }
      console.log("command", command);
      console.log("message written");
    });
    console.log("run");
  }
}, 500);

// const main = async () => {
//   try {
//     console.log("1");
//     const response = await port.open();
//     console.log("2");
//     console.log("response", response);
//     console.log("is open", port.isOpen);
//     port.write(":L00((255,000,255)\r\n)");
//     console.log("is open", port.isOpen);
//   } catch (error) {
//     console.log("error", error?.message);
//   }
// };

// main();
// // The open event is always emitted
// port.on("open", function () {
//   // open logic
//   console.log("hi");
// });

// port.close((x) => {
//   console.log(x?.name);
//   console.log(x?.message);
//   console.log("close");
// });
