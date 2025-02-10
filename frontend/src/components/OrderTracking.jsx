import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const OrderTracking = ({ orderId }) => {
    const [status, setStatus] = useState('Processing');

    useEffect(() => {
        socket.emit('trackOrder', orderId);

        socket.on('orderUpdate', (data) => {
            if (data.orderId === orderId) {
                setStatus(data.status);
            }
        });

        return () => {
            socket.off('orderUpdate');
        };
    }, [orderId]);

    return (
        <div>
            <h2>Order Tracking</h2>
            <p>Order ID: {orderId}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default OrderTracking;
