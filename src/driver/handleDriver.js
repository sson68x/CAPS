// 'use strict';

// const eventPool = require('../eventPool');
// const { order } = require('../chance');

// eventPool.on('PICKEDUP', driverPickedUp);
// eventPool.on('IN_TRANSIT', driverInTransit);
// eventPool.on('DELIVERED', driverDelivered);

// const payload = order;

// function driverPickedUp() {
//     console.log(`Package PICKED UP. Order# ${payload.orderID}`);
//     eventPool.emit('IN_TRANSIT', payload);
// };

// function driverInTransit() {
//     console.log(`Package In TRANSIT. Order# ${payload.orderID}`);
//     // eventPool.emit('DELIVERED', payload);
// };

// function driverDelivered() {
//     console.log(`Package DELIVERED. Order# ${payload.orderID}`);
// };


// module.exports = {
//     driverPickedUp,
//     driverInTransit,
//     driverDelivered,
// };

