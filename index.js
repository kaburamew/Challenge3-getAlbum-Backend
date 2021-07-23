const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();

app.use(express.json());
app.use(cors());


app.get(`/api/albums/:id`, (req, res) => {
  request(
    `https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(JSON.parse(body));
      }
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`App started on port ${port}...`));
