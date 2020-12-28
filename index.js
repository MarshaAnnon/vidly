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

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('Sorry, the genre with that given ID was not found');
  res.send(genre);
});

app.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };

  genres.push(genre);
  res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('Sorry, the genre with that given ID was not found');

  const { error } = validateGenre(req.body)
  if (error) return res.status(404).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});



function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string()
            .min(3)
            .required()
  });
  return schema.validate(genre);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }`));