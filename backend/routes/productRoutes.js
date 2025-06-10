const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// POST
router.post('/', createProduct);

// GET all
router.get('/', getAllProducts);

// GET by ID
router.get('/:id', getProductById);

// PUT
router.put('/:id', updateProduct);

// DELETE
router.delete('/:id', deleteProduct);

module.exports = router;
