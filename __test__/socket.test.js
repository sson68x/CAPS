'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const { vendorPickup, vendorDelivered } = require('../src/vendor/index.js');
const { driverPickedUp, driverInTransit, driverDelivered } = require('../src/driver/index.js');

jest.mock('socket.io-client', () => {
    return {
        io: jest.fn(() => {
            return {
                on: jest.fn(),
                emit: jest.fn(),
            };
        }),
    };
});

describe('Testing socket', () => {
    describe('Testing PICKUP handlers', () => {
        console.log = jest.fn();
        test('Package ready to be picked up', () => {
            vendorPickup({ store: 'xyz store' });

            expect(console.log).toHaveBeenCalledWith('Package ready to be picked up at xyz store');
        });
    });

    describe('Testing TRANSIT handler', () => {

        test('Package In TRANSIT', () => {
            driverTransitHandler({ orderID: xyz });

            expect(console.log).toHaveBeenCalledWith('Package In TRANSIT for order# xyz');
            expect(socket.emit).toHaveBeenCalledWith('DELIVERED', { orderID: xyz });
        });
    });
});
