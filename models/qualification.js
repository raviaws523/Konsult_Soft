'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Qualification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'userId',
                constraints: true,
                onDelete: 'CASCADE'
            });
        }
    }
    Qualification.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
        },
        institution: {
            type: DataTypes.STRING,
        },
        session_date: {
            type: DataTypes.INTEGER,
        },
        userId: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'Users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        sequelize,
        modelName: 'Qualification',
    });
    return Qualification;
};