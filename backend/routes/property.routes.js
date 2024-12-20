import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty
} from '../controllers/property.controller.js';

const router = express.Router();

router.post('/', protect, createProperty);
router.get('/', getProperties);
router.get('/:id', getPropertyById);
router.put('/:id', protect, updateProperty);

export default router;