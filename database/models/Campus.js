/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWBkK3Qr2ItCayAtt6OyznURWjIYHUHs3yw&usqp=CAU"
  }
});

// Export the campus model
module.exports = Campus;