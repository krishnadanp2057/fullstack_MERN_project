const express = require('express');
const { checkFraud } = require('../utils/fraudDetection');
const router = express.Router();
const Order = require('../models/Order');

router.post('/create', async (req, res) => {
    const { userId, products, totalAmount } = req.body;

    try {
        const fraudResult = await checkFraud(userId, totalAmount);

        if (fraudResult.isFraud) {
            return res.status(400).json({ message: 'Order flagged as fraudulent' });
        }

        const newOrder = new Order({ userId, products, totalAmount, status: 'Processing' });
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order' });
    }
});

module.exports = router;
