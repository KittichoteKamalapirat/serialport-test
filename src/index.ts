import { ReadlineParser } from "@serialport/parser-readline";
import { SerialPort } from "serialport";
import {
  blueCommand,
  greenCommand,
  randomColorCommand,
  redCommand,
  restartCommand,
} from "./constants";

// Create a port
const port = new SerialPort({
  path: "/dev/tty.usbserial-5",
  baudRate: 9600,
  autoOpen: true,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

console.log("list all connected ports", SerialPort.list());

const getConnectedArduinos = async () => {
  const allPorts = await SerialPort.list();
  const arduinos = allPorts.filter((port) => {
    const vendorIdIsMatched = port.vendorId === "10c4";
    const reg = new RegExp("/dev/tty.usb*");
    const pathIsMatched = port.path.match(reg);
    return vendorIdIsMatched && pathIsMatched;
  });

  console.log("list all connected ports", allPorts);
  console.log("list all connected arduinosss", arduinos);
};

getConnectedArduinos();
parser.on("data", function (data) {
  console.log("Data:", data.toString());
  console.log("-------------");
});

setInterval(() => {
  console.log("write");
  if (port.isOpen) {
    const command = `:L15(${greenCommand})\r\n)`;

    port.write(command, (err) => {
      if (err) {
        return console.log("Error on write: ", err.message);
      }
      console.log("command", command);
      console.log("message  3 written");
    });
  }
}, 1000);
