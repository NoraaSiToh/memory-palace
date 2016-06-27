'use strict';

var Sequelize = require('sequelize');

var db = require('.././_db.js');

var Item = db.define('item', {
  name: Sequelize.STRING,
  positionX: Sequelize.INTEGER,
  positionY: Sequelize.INTEGER,
  positionZ: Sequelize.INTEGER,
});


module.exports = Item;