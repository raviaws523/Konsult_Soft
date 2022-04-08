'use strict';
require('dotenv').config();

const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('Users', [{
            
            firstName: 'Aashi',

            lastName: 'Sharma',

            email: 'aashi@datametricks.com',

            password: bcrypt.hashSync(process.env.PASS, 8),

            //contact number
            phone: '9669002325',

            // gender
            gender: 'F',

            //whatsapp number
            whatsapp: '919669002325',

            //location
            location: 'delhi',

            // Date of Birth 
            dob: new Date(),

            //current salary
            curSalPA: 10,

            //expected salary
            expSalPA: 10,

            //work experience
            workExpInMonths: 2,
            workExpInYears: 2,

            //previous organization
            previousOrganisation: 'Nano',

            //current organization
            currentOrganisation: 'Nano',

            //available time
            noticePeriodInMonths: 2,
            noticePeriodInDays: 2,

            //marrital status
            marritalStatus: 'M',

            //number of child
            noOfChild: 0,

            //passport
            passportName: '',
            passportNumber: '', //passport number
            passportExpiry: new Date(), //passport expiry
            passportIssue: new Date(), //passport issue


            //work permit
            workPermit: true,

            //can relocate
            canRelocate: true,

            updatedBy: 'admin',

            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};