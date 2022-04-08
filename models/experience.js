'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Experience extends Model {
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
    Experience.init({

        field: {
            type: DataTypes.STRING,
            allowNull: false
        },
        years_of_experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }


    }, {
        sequelize,
        modelName: 'Experience',
    });
    return Experience;
};