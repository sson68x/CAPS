'use strict';

const DriverClient = require('./driver');
const driver = new DriverClient('driver');

driver.subscribe('PACKAGE_READY', payload => {
  setTimeout(() => {
    console.log(`Package order# ${payload.orderId} picked up.`);
    driver.publish('IN_TRANSIT', payload);
  }, 3000);
});

driver.subscribe('IN_TRANSIT', payload => {
  setTimeout(() => {
    console.log(`Package order# ${payload.orderId} is on the way.`);
    driver.publish('DELIVERED', payload);
  }, 3000);
});

driver.subscribe('DELIVERED', payload => {
  setTimeout(() => {
    console.log(`Package order# ${payload.orderId} from ${payload.store} has been delivered.`);
  }, 3000);
});


