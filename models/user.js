'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            User.hasMany(models.Qualification, {
                foreignKey: 'userId',
            });
            User.hasMany(models.Experience, {
                foreignKey: 'userId',
            });
            User.hasMany(models.Skill, {
                foreignKey: 'userId',
            });
            User.belongsToMany(models.Role, {
                through: 'UserRole',
                foreignKey: 'userId',
                as: 'roles'
            });


        }
    }
    User.init({

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //contact number
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },

        // gender
        gender: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },

        //whatsapp number
        whatsapp: {
            type: DataTypes.STRING(15),
            allowNull: true
        },

        //location
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // Date of Birth 
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        //current salary
        curSalPA: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: true
        },

        //expected salary
        expSalPA: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false
        },

        //work experience
        workExpInMonths: DataTypes.INTEGER(2),
        workExpInYears: DataTypes.INTEGER(2),

        //previous organization
        previousOrganisation: DataTypes.STRING,

        //current organization
        currentOrganisation: DataTypes.STRING,

        //available time
        noticePeriodInMonths: DataTypes.INTEGER(2),
        noticePeriodInDays: DataTypes.INTEGER(2),

        //marrital status
        marritalStatus: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },

        //number of child
        noOfChild: {
            type: DataTypes.INTEGER,
            allowNull: true

        },

        //passport
        passportName: DataTypes.STRING(),
        passportNumber: DataTypes.STRING(15), //passport number
        passportExpiry: DataTypes.DATEONLY, //passport expiry
        passportIssue: DataTypes.DATEONLY, //passport issue


        //work permit
        workPermit: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        //can relocate
        canRelocate: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        updatedBy: {
            type: DataTypes.STRING,
            allowNull: false
        },


    }, {
        sequelize,
        modelName: 'User',
    });
    
    

    return User;
};