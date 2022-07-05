'use strict';

const VendorClient = require('../src/vendor/vendor');
const DriverClient = require('../src/driver/driver');
const { io } = require('socket.io-client');

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

describe('Client Tets', () => {
  test('Call socket function for vendor on instantiation', () => {
    jest.clearAllMocks();
    let vendor = new VendorClient('new');
    expect(io).toHaveBeenCalledWith('http://localhost:3002/caps');
    expect(vendor.socket.emit).toHaveBeenCalledWith('JOIN', 'new');
    expect(vendor.socket.on).toHaveBeenCalled();
  });

  test('Call socket function for driver on instantiation', () => {
    jest.clearAllMocks();
    let driver = new DriverClient('new');
    expect(io).toHaveBeenCalledWith('http://localhost:3002/caps');
    expect(driver.socket.emit).toHaveBeenCalledWith('JOIN', {'queueId': 'new'});
    expect(driver.socket.on).toHaveBeenCalled();
  });
});
