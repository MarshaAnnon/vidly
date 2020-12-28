const express = require('express');
const Joi = require('joi');

const app = express();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Animation" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Crime" },
  { id: 5, name: "Drama" },
  { id: 6, name: "Experimental" },
  { id: 7, name: "Fantasy" },
  { id: 8, name: "Historical" },
  { id: 9, name: "Horror" },
  { id: 10, name: "Romance" },
  { id:11, name: "Science Fiction"},
  { id:12, name: "Thriller"},
  { id:13, name: "Western" },
  { id: 14, name: "Other" }
]

app.use(express.json());

//gets all of the genre objects
app.get('/api/genres', (req,res) => {
  genres.map((genre) => {
    console.log(`These are all the genres: ${genre}`)
  })
  res.send(genres)
})



function validateGenres(genres) {
  const schema = Joi.object({
    name: Joi.string()
            .min(3)
            .required()
  });
  return schema.validate(genre);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }`));