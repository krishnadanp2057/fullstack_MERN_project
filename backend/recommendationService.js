const axios = require('axios');
const Product = require('../models/Product');

async function getRecommendations(userId) {
    try {
        // Fetch user's purchase history
        const purchasedProducts = await Product.find({ purchasedBy: userId });

        // Call an AI model (e.g., a Python service) to get recommendations
        const response = await axios.post('http://localhost:5001/recommend', {
            purchasedProducts
        });

        return response.data.recommendations;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return [];
    }
}

module.exports = { getRecommendations };
