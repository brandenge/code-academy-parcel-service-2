'use strict';

const eventPool = require('./eventPool');
const pickupHandler = require('./handlers/pickup-handler');

eventPool.on('pickup', pickupHandler);

setInterval(() => {
  console.log('-----------NEW INTERVAL-----------');
  console.log('The pickup handler is being called');
  eventPool.emit('pickup', 'pick up data here');
}, 1000);
