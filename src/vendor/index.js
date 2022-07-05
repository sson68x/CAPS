'use strict';

const { Chance } = require('chance');
const chance = new Chance();
const VendorClient = require('./vendor');
const acmeVendor = new VendorClient('acme-widgets');
const flowersVendor = new VendorClient('1-800-flowers');

setInterval(() => {
  const order = {
    store: 'acme-widgets',
    orderID: chance.guid(),
    customer: chance.name(),
    address: `${chance.city()}, ${chance.state()}`,
  };
  console.log(`New order ready for PICKUP for ${order.store}`);
  acmeVendor.publish('PACKAGE_READY', { messageId: chance.guid(), ...order });
}, 3000);

acmeVendor.subscribe('DELIVERED', (payload) => {
  setTimeout(() => {
    console.log(`Thank you for DELIVERING order# ${payload.orderID} for acme-widgets`);
  }, 3000);

});

setInterval(() => {
  const order = {
    store: '1-800 flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: `${chance.city()}, ${chance.state()}`,
  };
  console.log(`New order ready for PICKUP for ${order.store}`);
  flowersVendor.publish('PACKAGE_READY', { messageId: chance.guid(), ...order });
}, 3000);

// flowerVendor.subscribe('DELIVERED', (payload) => {
//     setTimeout(() => {
//       console.log(`Thank you for DELIVERING order# ${payload.orderID} for 1-800-flowers`);
//     }, 3000);
// });
