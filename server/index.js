const express = require("express"); // requires the express
const app = express(); // creates the express object

/* Express Router Handler which takes 2 parameters, the route, and an arrow function
   The arrow function has also two parameters: request and response, the res.send sends an JSON object with that dummy data
   If you navigate to localhost:5000 it will appear { "hi" : "there" } on the screen
   app.listen listens to any request from the port 5000.
*/

app.get("/", (req, res) => {
  res.send({
    hi: "there"
  });
});
/*Port is the variable that holds the port number when our app is deployed on heroku.
  If there isn't an enviroment variable that has been already defined by Heroku use port 5000.*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
