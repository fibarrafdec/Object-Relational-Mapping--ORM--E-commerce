// Import necessary packages and models
const router = require('express').Router();
const { Category, Product } = require('../../models');

// API endpoint to get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Categories not found!' });
  }
});

// API endpoint to get a category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    if (!category) {
      res.status(404).json({ message: 'Category not found!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Category not found!' });
  }
});

// API endpoint to create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: 'Category creation failed' });
  }
});

// API endpoint to update a category by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });

    if (!updated[0]) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(updated);
    }
  } catch (err) {
    res.status(500).json({ message: 'Category update failed' });
  }
});

// API endpoint to delete a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });

    !deleted
      ? res.status(404).json({ message: 'Category not found' })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: 'Category not deleted!', error: err });
  }
});

// Export the router
module.exports = router;
