'use strict';

const eventPool = require('../src/eventPool');
const driverPickedUp = require('../src/driver/handleDriver');

jest.mock('../src/eventPool', () => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
    }
});

describe('Testing driver handler', () => {
    describe('Testing PICKEDUP handler', () => {
        console.log = jest.fn();

        test('Should log message: Package PICKED UP', () => {
            driverPickedUp({ orderID: 123 });

            expect(console.log).toHaveBeenCalledWith('Driver, there is a package ready for PICKUP order# 123');
            expect(eventPool.emit).toHaveBeenCalledWith('IN_TRANSIT', { orderID: 123 });

        });
    });
});
