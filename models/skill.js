'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Skill extends Model {
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
    Skill.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        competency: {
            type: DataTypes.JSON,
            allowNull: false
        },

        experience: {
            type: DataTypes.STRING,
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users', // name of Source model
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        sequelize,
        modelName: 'Skill',
    });
    return Skill;
};