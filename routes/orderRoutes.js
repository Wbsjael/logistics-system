const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Create Order
router.post('/create', async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('customer vehicle');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

