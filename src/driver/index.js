'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

socket.on('PICKUP', driverPickedUp);
function driverPickedUp(payload) {
    setInterval(() => {
        console.log(`Package PICKED UP. Order# ${payload.orderID}`);
        socket.emit('TRANSIT', payload);
    }, 2000);
};

socket.on('TRANSIT', driverInTransit);
function driverInTransit(payload) {
    setInterval(() => {
        console.log(`Package In TRANSIT. Order# ${payload.orderID}`);
        socket.emit('DELIVERED', payload);
    }, 2000);
};

socket.on('DELIVERED', driverDelivered);
function driverDelivered(payload) {
    setInterval(() => {
        console.log(`Package DELIVERED. Order# ${payload.orderID}`);
    }, 2000);
};

module.exports = {
    driverPickedUp,
    driverInTransit,
    driverDelivered,
};


