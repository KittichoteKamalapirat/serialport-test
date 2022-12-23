import { SerialPort } from "serialport";
import { pad } from "./utils/pad";

// Create a port
const port1 = new SerialPort({
  path: "/dev/tty.usbserial-0001",
  // path: "/",
  baudRate: 9600,
  autoOpen: true,
});

const port2 = new SerialPort({
  path: "/dev/tty.usbserial-5",
  // path: "/",
  baudRate: 9600,
  autoOpen: true,
});

const port3 = new SerialPort({
  path: "/dev/tty.usbserial-7",
  // path: "/",
  baudRate: 9600,
  autoOpen: true,
});

// Write the data to the serial port
// port.write("ROBOT POWER ON");

// port.write("ROBOT POWER ON")

const start1 = () => {
  if (port1.isOpen) {
    console.log("already open");
    return;
  }

  // port1._read((x) => console.log("------read-------", x));
  port1.get;
  port1.open((err) => {
    // if (err) {
    //   return console.log("Error opening port: ", err.name, err.message);
    // }
    if (err) {
      console.log("port 1is open", port1.isOpen);
      console.log(err?.message);
      console.log(err?.name);
    }

    // Because there's no callback to write, write errors will be emitted on the port:

    // port.write(":L00((255,000,000)\r\n)");
  });
};

const start2 = () => {
  if (port2.isOpen) {
    console.log("already open");
    return;
  }
  port2.open((err) => {
    // if (err) {
    //   return console.log("Error opening port: ", err.name, err.message);
    // }
    if (err) {
      console.log("port 2 is open", port2.isOpen);

      console.log(err?.message);
      console.log(err?.name);

      // throw new Error(err.message);
    }

    // Because there's no callback to write, write errors will be emitted on the port:

    // port.write(":L00((255,000,000)\r\n)");
  });
};

const start3 = () => {
  if (port3.isOpen) {
    console.log("already open");

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const threeDigitR = pad(r, 3);
    const threeDigitG = pad(g, 3);
    const threeDigitB = pad(b, 3);
    const randomColor = `${threeDigitR},${threeDigitG},${threeDigitB}`;
    console.log("random", randomColor);
    const red = "255,000,000";
    const green = "000,255,000";
    const blue = "000,000,255";
    const command = `:L03(${randomColor})\r\n)`;

    port3.write(command, (err) => {
      if (err) {
        return console.log("Error on write: ", err.message);
      }
      console.log("command", command);
      console.log("message  3 written");
    });

    return;
  }

  // port3.open((err) => {
  //   if (err) {
  //     console.log("port 3 is open", port3.isOpen);

  //     console.log(err?.message);
  //     console.log(err?.name);
  //   }
  // });
};

// setInterval(() => {
//   start1();
//   if (port1.isOpen) {
//     console.log("to write");
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);

//     const threeDigitR = pad(r, 3);
//     const threeDigitG = pad(g, 3);
//     const threeDigitB = pad(b, 3);
//     const randomColor = `${threeDigitR},${threeDigitG},${threeDigitB}`;

//     const red = "255,000,000";
//     const green = "000,255,000";
//     const blue = "000,000,255";
//     const command = `:L00(${randomColor})\r\n)`;

//     port1.write(command, (err) => {
//       // if (error) console.log(error?.message);

//       if (err) {
//         return console.log("Error on write: ", err.message);
//       }
//       console.log("command", command);
//       console.log("message 1 written");
//     });
//   }
// }, 1000);

// setInterval(() => {
//   start2();
//   if (port2.isOpen) {
//     console.log("to write");
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);

//     const threeDigitR = pad(r, 3);
//     const threeDigitG = pad(g, 3);
//     const threeDigitB = pad(b, 3);
//     const randomColor = `${threeDigitR},${threeDigitG},${threeDigitB}`;
//     const red = "255,000,000";
//     const green = "000,255,000";
//     const blue = "000,000,255";
//     const command = `:L00(${randomColor})\r\n)`;

//     port2.write(command, (err) => {
//       // if (error) console.log(error?.message);

//       if (err) {
//         return console.log("Error on write: ", err.message);
//       }
//       console.log("command", command);
//       console.log("message  2 written");
//     });
//   }
// }, 1000);

setInterval(() => {
  start3();
  start1();
  start2();

  // if (port3.isOpen) {
  //   // const command = `:STS`;

  //   const r = Math.floor(Math.random() * 255);
  //   const g = Math.floor(Math.random() * 255);
  //   const b = Math.floor(Math.random() * 255);
  //   const threeDigitR = pad(r, 3);
  //   const threeDigitG = pad(g, 3);
  //   const threeDigitB = pad(b, 3);
  //   const randomColor = `${threeDigitR},${threeDigitG},${threeDigitB}`;
  //   console.log("random", randomColor);
  //   const red = "255,000,000";
  //   const green = "000,255,000";
  //   const blue = "000,000,255";
  //   const command = `:L03(${randomColor})\r\n)`;

  //   port3.write(command, (err) => {
  //     if (err) {
  //       return console.log("Error on write: ", err.message);
  //     }
  //     console.log("command", command);
  //     console.log("message  3 written");
  //   });
  // }
}, 1000);

// if (port3.isOpen) {
//   port3.on("error", function (err) {
//     console.log("Error: ", err.message);
//   });

//   port3.on("readable", function () {
//     console.log("--------Data---------", port3.read());
//   });

//   port3.on("data", function (data) {
//     console.log("Data:", data);
//   });
// }

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
