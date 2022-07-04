'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const Chance = require('chance');
const chance = new Chance();
const room = chance.company();

socket.on('PICKUP', vendorPickup);
function vendorPickup(payload) {
    setTimeout(() => {
        console.log(`Package ready to be picked up at ${payload.store}`);
    }, 2000);
};

socket.on('DELIVERED', vendorDelivered);
function vendorDelivered(payload) {
    setInterval(() => {
        console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
    }, 2000);
};

socket.emit('JOIN', room);

setInterval(() => {
    const order = {
        store: chance.company(),
        orderID: chance.guid(),
        customer: chance.name(),
        address: `${chance.city()}, ${chance.state()}`,
    };
    socket.emit('PICKUP', order);
}, 2000);

module.exports = {
    vendorPickup,
    vendorDelivered,
};
