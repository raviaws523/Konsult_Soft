'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('RolePermissions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id',
                    as: 'roles'
                }
            },
            perm_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Permissions',
                    key: 'id',
                    as: 'permissions'
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
        await queryInterface.dropTable('RolePermissions');
    }
};