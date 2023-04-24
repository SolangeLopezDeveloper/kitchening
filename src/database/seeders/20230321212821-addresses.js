'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('Addresses', [{
 address: "Lujan 705",
 city: "Lanús",
 province: "Buenos Aires",
 zipCode: 1824,
 createdAt : new Date(),
    updatedAt : new Date()
     },
     {
      address: "Av Siempre Viva 3030",
      city: "Springfield",
      province: "La Pampa",
      zipCode: 5656,
      createdAt : new Date(),
         updatedAt : new Date()
          },
          {
            address: "Calle Falsa 123",
            city: "Montegrande",
            province: "Buenos Aires",
            zipCode: 7854,
            createdAt : new Date(),
               updatedAt : new Date()
                }], {});
   
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Addresses', null, {});
     
  }
};
