const express = require('express');
const recipes = require('./recipesModel.js');

const router = express.Router();

// get a list of courses
router.get('/', (req, res) => {
  recipes
    .find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => res.status(500).json(err));
});

// get a course by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const recipes = await recipes.findById(id);

    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// create courses
router.post('/', (req, res) => {
  const recipe = req.body;

  recipes
    .add(recipe)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// update courses
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  recipes
    .update(id, changes)
    .then(success => {
      if (!success || success < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(success);
      }
    })
    .catch(err => res.status(500).json(err));
});

// delete courses
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  recipes
    .remove(id)
    .then(count => {
      if (!success || success < 1) {
        res.status(404).json({ message: 'No records found to delete' });
      } else {
        res.status(200).json(success);
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
