const express = require('express');

const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviePath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readfile(moviePath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === (req.params.id));
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const { movie, price } = req.body;
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writefile(moviePath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
const { id } = req.params;
const { movie, price } = req.body;
const movies = await readFile();
const index = movies.findIndex((item) => item.id === Number(id));
movie[index] = { id: Number(id), movie, price };
const updatedMovie = JSON.stringfy(movies, null, 2);
await fs.writeFile(moviePath, updatedMovie);
res.status(200).json(movie[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
 const { id } = req.params;
 const movies = await readFile();
 const filteredMovie = movies.filter((movie) => movie.id !== Number(id));
 const updatedMovie = JSON.stringfy(filteredMovie, null, 2);
 await fs.writeFile(moviePath, updatedMovie);
 res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;