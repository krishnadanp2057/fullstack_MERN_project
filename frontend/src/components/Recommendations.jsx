import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = ({ userId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/api/recommendations/${userId}`)
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching recommendations:", error));
    }, [userId]);

    return (
        <div>
            <h2>Recommended for You</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
