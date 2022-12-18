/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  image: {
    type: Sequelize.STRING,
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWBkK3Qr2ItCayAtt6OyznURWjIYHUHs3yw&usqp=CAU",
    allowNull: true
  },

  gpa: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Export the student model
module.exports = Student;