'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Experiences', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            field: {
                type: Sequelize.STRING,
                allowNull: false
            },
            years_of_experience: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users', // name of Source model
                    key: 'id' // key in Source model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Experiences');
    }
};