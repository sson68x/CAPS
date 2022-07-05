'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');

// instance of a listening Event Server at http://localhost:3002
const server = new Server(PORT);
const caps = server.of('/caps');
const capsQueue = new Queue();

caps.on('connection', (socket) => {
    console.log('Socket connected to Event Server!', socket.id);

    socket.onAny((event, payload) => {
        let time = new Date();
        console.log('EVENT:', { event, time, payload });
    });

    socket.on('JOIN', queueId => {
        socket.join(queueId);
        socket.emit('JOIN', queueId);
    });

    socket.on('PACKAGE_ORDER', payload => {
        let currentQueue = capsQueue.read(payload.queueId);
        if (!currentQueue) {
            let queueKey = capsQueue.store(payload.queueId, new Queue());
            currentQueue = capsQueue.read(queueKey);
        }
        currentQueue.store(payload.capsId, payload);
        caps.emit('PACKAGE_ORDER', payload);
    });

    socket.on('PACKAGE_READY', payload => {
        let currentQueue = capsQueue.read(payload.queueId);
        if (!currentQueue) {
            let queueKey = capsQueue.store(payload.queueId, new Queue());
            currentQueue = capsQueue.read(queueKey);
        }
        currentQueue.store(payload.capsId, payload);
        caps.emit('PACKAGE_READY', payload);
    });

    socket.on('IN_TRANSIT', payload => {
        let currentQueue = capsQueue.read(payload.queueId);
        if (!currentQueue) {
            let queueKey = capsQueue.store(payload.queueId, new Queue());
            currentQueue = capsQueue.read(queueKey);
        }
        currentQueue.store(payload.capsId, payload);
        caps.emit('IN_TRANSIT', payload);
    });

    socket.on('DELIVERED', payload => {
        let currentQueue = capsQueue.read(payload.queueId);
        if (!currentQueue) {
            let queueKey = capsQueue.store(payload.queueId, new Queue());
            currentQueue = capsQueue.read(queueKey);
        }
        currentQueue.store(payload.capsId, payload);
        caps.emit('DELIVERED', payload);
    });

    socket.on('THANK_YOU', payload => {
        let currentQueue = capsQueue.read(payload.queueId);
        if (!currentQueue) {
            let queueKey = capsQueue.store(payload.queueId, new Queue());
            currentQueue = capsQueue.read(queueKey);
        }
        currentQueue.store(payload.capsId, payload);
        caps.emit('THANK_YOU', payload);
    });

    // socket.on('RECEIVED', payload => {
    //   let currentQueue = capsQueue.read(payload.queueId);
    //   if(!currentQueue){
    //     throw new Error('No queue created for this cargo');
    //   }
    //   let caps = currentQueue.remove(payload.capsId);
    //   caps.to(payload.queueId).emit('RECEIVED', caps);
    // });
});
