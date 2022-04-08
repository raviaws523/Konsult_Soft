'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsToMany(models.User, {
                through: 'UserRole',
                foreignKey: 'roleId',
                as: 'user'
            });
            this.belongsToMany(models.Permission, {
                through: 'RolePermission',
                as: 'permissions',
                foreignKey: 'roleId'
            });

        }
    }
    Role.init({
        role_name: {
            type: DataTypes.STRING
        },
        role_description: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Role',
    });
    return Role;
};