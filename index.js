require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let games = [
  {
    id: 1,
    judul: "The Withcer 3",
    tahun: 2015,
    genre: "action",
    rating: 10
  },
  {
    id: 2,
    judul: "Red Dead Redemption 2",
    tahun: 2019,
    genre: "action",
    rating: 10
  }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("ya apa"));

app.post("/games", (req, res) => {
  const lastIndex = games.length - 1;
  const id = games[lastIndex].id + 1;
  const judul = req.body.judul;
  const tahun = req.body.tahun;
  const genre = req.body.genre;
  const rating = req.body.rating;

  const game = {
    id,
    judul,
    tahun,
    genre,
    rating
  };

  games.push(game);
  res.send({
    message: "sukses menambah baru",
    games
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
