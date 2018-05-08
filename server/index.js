const express = require("express"); // requires the express
const app = express(); // creates the express object

/* Express Router Handler which takes 2 parameters, the route, and an arrow function
   The arrow function has also two parameters: request and response, the res.send sends an JSON object with that dummy data
   If you navigate to localhost:5000 it will appear { "hi" : "there" } on the screen
   app.listen listens to any request from the port 5000.
*/

app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    });
});

app.listen(5000);