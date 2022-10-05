'use strict';

const Chance = require('chance');

const chance = new Chance();

const order = {
  company: chance.company(),
  name: chance.name(),
  address: chance.address(),
  orderId: chance.guid(),
};

console.log(order);
