// Import necessary packages and models
const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');

// API endpoint to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ include: [{ model: Category }, { model: Tag }] });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Products not found!' });
  }
});

// API endpoint to get a product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });

    if (!product) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Product not found!' });
  }
});

// API endpoint to create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Product creation failed' });
  }
});

// API endpoint to update a product by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated[0]) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(updated);
    }
  } catch (err) {
    res.status(500).json({ message: 'Product update failed' });
  }
});

// API endpoint to delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });

    !deleted
      ? res.status(404).json({ message: 'Product not found' })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: 'Product not deleted!', error: err });
  }
});

// Export the router
module.exports = router;
