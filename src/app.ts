import express, { Request, Response } from "express";
import { splitString,concatenateStrings, isLeapYear,secretHandshake,} from "./logic";

const app = express();
const PORT = 8000;
app.use(express.json());

// This is starting point of the app
app.get("/", (req: Request, res: Response) => {
  res.send("Hello there, i'm nilesh and this is my assignment of Week 1");
});

//a) To split the string
app.get("/split/:inputString", (req: Request, res: Response) => {
  const { inputString } = req.params;
  const Result = splitString(inputString);

  res.json({ Result });
});

//b) To concatenate the Strings
app.get("/concatenate/:param1/:param2", (req: Request, res: Response) => {
  const { param1, param2 } = req.params;
  const revisedString = concatenateStrings(param1 as string, param2 as string);

  res.json({ revisedString });
});



//c) To check that given year is leap year or not
app.get("/leap-year/:year", (req: Request, res: Response) => {
  const { year } = req.params;
  const leapYear = isLeapYear(parseInt(year));

  res.json({ leapYear });
});


//d) secrete handshape

app.get("/secretCode/:number", (req: Request, res: Response) => {
  const { number } = req.params;
  const code = secretHandshake(parseInt(number));

  res.json({ code });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
