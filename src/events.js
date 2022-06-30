'use strict';

const eventPool = require('./eventPool');
const order = require('./chance');
require('./driver/handleDriver');
require('./vendor/handleVendor');

eventPool.on('PICKUP_READY', (payload) => eventLogger('PICKUP_READY', payload));
eventPool.on('PICKEDUP', (payload) => eventLogger('PICKEDUP', payload));
eventPool.on('IN_TRANSIT', (payload) => eventLogger('IN_TRANSIT', payload));
eventPool.on('DELIVERED', (payload) => eventLogger('DELIVERED', payload));

function eventLogger(event, payload) {
let time = new Date();
    console.log('EVENT:', {event, time, payload});
};

setInterval(() => {
    // eventPool.emit('PICKUP_READY', order);
    eventPool.emit('PICKEDUP', order);
    // eventPool.emit('IN_TRANSIT', order);
    // eventPool.emit('DELIVERED', order);
}, 4000);
