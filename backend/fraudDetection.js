const axios = require('axios');

async function checkFraud(userId, amount) {
    try {
        const response = await axios.post('http://localhost:5001/detect_fraud', { userId, amount });
        return response.data;
    } catch (error) {
        console.error('Error detecting fraud:', error);
        return { isFraud: false };
    }
}

module.exports = { checkFraud };
