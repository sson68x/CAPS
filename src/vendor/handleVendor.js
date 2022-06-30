'use strict';

const eventPool = require('../eventPool');
const { order } = require('../chance');

eventPool.on('PICKUP_READY', vendorPickup);
eventPool.on('DELIVERED', vendorDelivered);
eventPool.on('DELIVERED', vendorToDriver);

const payload = order;

function vendorPickup() {
    console.log(`Package ready to be picked up at ${payload.store}`);
};

function vendorDelivered() {
    console.log(`Thank you, ${payload.customer}`)
};

function vendorToDriver() {
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
};

module.exports = {
    vendorPickup,
    vendorDelivered,
    vendorToDriver
};
