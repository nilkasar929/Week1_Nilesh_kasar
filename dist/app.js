"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.json());
// This is starting point of the app
app.get("/", (req, res) => {
    res.send("Hello there, i'm nilesh and this is my assignment of Week 1");
});
//a) To split the string
app.get("/split/:inputString", (req, res) => {
    const { inputString } = req.params;
    const Result = (0, logic_1.splitString)(inputString);
    res.json({ Result });
});
//b) To concatenate the Strings
app.get("/concatenate/:param1/:param2", (req, res) => {
    const { param1, param2 } = req.params;
    const revisedString = (0, logic_1.concatenateStrings)(param1, param2);
    res.json({ revisedString });
});
//c) To check that given year is leap year or not
app.get("/leap-year/:year", (req, res) => {
    const { year } = req.params;
    const leapYear = (0, logic_1.isLeapYear)(parseInt(year));
    res.json({ leapYear });
});
//d) secrete handshape
app.get("/secretCode/:number", (req, res) => {
    const { number } = req.params;
    const code = (0, logic_1.secretHandshake)(parseInt(number));
    res.json({ code });
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
