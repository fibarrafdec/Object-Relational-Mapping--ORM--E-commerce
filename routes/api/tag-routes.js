// Import necessary packages and models
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// API endpoint to get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: 'Tags not found!' });
  }
});

// API endpoint to get a tag by ID
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, { include: [{ model: Product }] });

    if (!tag) {
      res.status(404).json({ message: 'Tag not found!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: 'Tag not found!' });
  }
});

// API endpoint to create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json({ message: 'Tag creation failed' });
  }
});

// API endpoint to update a tag by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Tag.update(req.body, { where: { id: req.params.id } });

    if (!updated[0]) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      res.status(200).json(updated);
    }
  } catch (err) {
    res.status(500).json({ message: 'Tag update failed' });
  }
});

// API endpoint to delete a tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });

    !deleted
      ? res.status(404).json({ message: 'Tag not found' })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: 'Tag not deleted!', error: err });
  }
});

// Export the router
module.exports = router;
