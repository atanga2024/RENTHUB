import Property from '../models/Property.js';

export const createProperty = async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      owner: req.user.id
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate('owner', 'name email')
      .sort('-createdAt');
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate('owner', 'name email');
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check ownership
    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};