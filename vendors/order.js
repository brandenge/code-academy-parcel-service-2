'use strict';

const Chance = require('chance');

const chance = new Chance();

class Order {
  constructor() {
    this.store = chance.company();
    this.id = chance.guid();
    this.customer = chance.name();
    this.address = chance.address();
  }
}

module.exports = Order;
