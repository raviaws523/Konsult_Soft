'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('UserRoles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'users'
                }
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id',
                    as: 'roles'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('UserRoles');
    }
};