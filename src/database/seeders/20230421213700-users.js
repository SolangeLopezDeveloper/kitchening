'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require('bcryptjs');
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Users', [{
      name: "Solange",
      surname: "López",
      email: "sol@gmail.com",
      password:bcryptjs.hashSync("123456",10),
      image: null,
      addressId: 1,
      rolId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
      },
      {
        name: "Eric",
        surname: "Mena",
        email: "eric@gmail.com",
        password:bcryptjs.hashSync("123456",10),
        image: null,
        addressId: 3,
        rolId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
        },{
          name: "Emanuel",
          surname: "Arroyo",
          email: "ema@gmail.com",
          password: bcryptjs.hashSync("123456",10),
          image: null,
          addressId: 2,
          rolId : 2,
          createdAt : new Date(),
          updatedAt : new Date()
          }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
