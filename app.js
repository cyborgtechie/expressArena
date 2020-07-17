const express = require("express");
const morgan = require("morgan");

const app = express();
// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan("dev"));

// a request handler function that responds with some text to GET request to the root URL (/)
//here we are using a HTTP Request object 'res' to send text to the client
//This is the final request handler
app.get("/pizza", (req, res) => {
  res.send("Hello trying to see if this works!");
});

app.get("/pizza/pepperoni", (req, res) => {
  res.send("your pizza is on the way!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("we don't serve that here homie");
});

app.get("/echo", (req, res) => {
  const text = `here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
    IP:  ${req.ip}
    Method: ${req.method}
    `;
  res.send(text);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end();
});

app.get("/greetings", (req, res) => {
  //1. get values from the request
  const name = req.query.name;
  const race = req.query.race;

  //2. validate the values
  if (!name) {
    //3. name was not provided
    return res.status(400).send("Please provide a name");
  }

  if (!race) {
    //3. race was not provided
    return res.status(400).send("Please provide a race");
  }

  //4. and 5. both name and race are valid so do the processing.
  const greeting = `Greetings ${name} the ${race}, welcome to our great kingdom.`;

  //6. send the response
  res.send(greeting);
});

//assignment//
//#1
app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  //find sum
  let sum = Number(a) + Number(b);

  const result = `The sum of ${a} and ${b} is ${sum}`;

  res.send(result);
});
app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});

//#2
app.get("/cipher", (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;

  res.send();
});
