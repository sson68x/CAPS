// 'use strict';

// const eventPool = require('../src/eventPool');
// const { driverPickedUp } = require('../src/driver/handleDriver');

// jest.mock('../src/eventPool', () => {
//     return {
//         on: jest.fn(),
//         emit: jest.fn(),
//     }
// });

// describe('Testing driver handler', () => {
//     describe('Testing PICKEDUP handler', () => {
//         console.log = jest.fn();

//         test('Should log message: Package PICKED UP', () => {
//             // const payload = order;
//             driverPickedUp({ orderID: 123 });

//             expect(console.log).toHaveBeenCalledWith('Package PICKED UP. Order# 9d2742f1-472a-577c-8b7e-38c3b70e8cf5');
//             expect(eventPool.emit).toHaveBeenCalledWith('IN_TRANSIT', { orderID: 123 });

//         });
//     });
// });
