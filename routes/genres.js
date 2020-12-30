const express = require('express');
const router = express.Router();
const { Genre, validate } = require('../models/genre')


// const genres = [
//   { id: 1, name: "Action" },
//   { id: 2, name: "Animation" },
//   { id: 3, name: "Comedy" },
//   { id: 4, name: "Crime" },
//   { id: 5, name: "Drama" },
//   { id: 6, name: "Experimental" },
//   { id: 7, name: "Fantasy" },
//   { id: 8, name: "Historical" },
//   { id: 9, name: "Horror" },
//   { id: 10, name: "Romance" },
//   { id:11, name: "Science Fiction"},
//   { id:12, name: "Thriller"},
//   { id:13, name: "Western" },
//   { id: 14, name: "Other" }
// ]

//gets all of the genre objects
router.get('/', async (req,res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres)
});

router.get('/:id', async (req, res) => {
  const genre = await Genre.findById(req.params.id)

  if (!genre) return res.status(404).send('Sorry, the genre with that given ID was not found');
  res.send(genre);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();
  res.send(genre);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message);

  const genre =  await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name}, {
    new: true
  })

  if (!genre) return res.status(404).send('Sorry, the genre with that given ID was not found');
  
  res.send(genre);
});

router.delete('/:id', async (req, res) => {
  const genre =  await Genre.findByIdAndRemove(req.params.id);
  
  if (!genre) return res.status(404).send('Sorry, the genre with that given ID was not found');

  res.send(genre);
});

module.exports = router;