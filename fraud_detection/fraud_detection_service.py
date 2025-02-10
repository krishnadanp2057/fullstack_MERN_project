from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/detect_fraud', methods=['POST'])
def detect_fraud():
    data = request.json
    user_id = data.get('userId')
    amount = data.get('amount')

    # Simulate a fraud detection algorithm
    fraud_score = random.uniform(0, 1)  # Example: Generate a random fraud score

    return jsonify({'fraudScore': fraud_score, 'isFraud': fraud_score > 0.7})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
