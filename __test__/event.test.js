'use strict';

const eventPool = require('../src/eventPool');
const driverPickedUp = require('../src/driver/index');
const driverInTransit = require('../src/driver/index');
const driverDelivered = require('../src/driver/index');
const vendorPickup = require('../src/vendor/index');
const vendorDelivered = require('../src/vendor/index');

jest.mock('../src/eventPool', () => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
    };
});

describe('Testing event handlers', () => {
    describe('Testing PICKUP handlers', () => {
        test('Package ready to be picked up', () => {
            vendorPickup({ store: 'xyz Company' });

            expect(console.log).toHaveBeenCalledWith('Package ready to be picked up at xyz Company');
        });
    });
});
