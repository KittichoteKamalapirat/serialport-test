"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialport_1 = require("serialport");
const port = new serialport_1.SerialPort({
    path: "/dev/tty.usbserial-0001",
    baudRate: 9600,
    autoOpen: true,
});
const start = () => {
    if (port.isOpen) {
        console.log("already open");
        return;
    }
    port.open((err) => {
        if (err) {
            console.log("is open", port.isOpen);
            console.log("is open", port.isOpen);
            console.log(err === null || err === void 0 ? void 0 : err.message);
            console.log(err === null || err === void 0 ? void 0 : err.name);
            console.log("is open", port.isOpen);
            console.log(port.baudRate);
            console.log(port.baudRate);
        }
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
            if (err) {
                return console.log("Error on write: ", err.message);
            }
            console.log("command", command);
            console.log("message written");
        });
        console.log("run");
    }
}, 500);
//# sourceMappingURL=index.js.map