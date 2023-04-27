const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//creates a new sequelize model for user
class User extends Model {}

User.init(
    {
        user_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8],
            }
        }
    },
    {
        hooks:{
            beforeCreate: async (newUserData) => {
                newUserData.email= await newUserData.email.toLowerCase();
                return updatedUserData;
            },
            beforeCreate: async(newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.pasword, 8)
            }

        }
    },
    {   //link to database connection
        sequelize,
        timestamps:false,
        underscored:true,
        modelName:'user'
    }
);

module.exports = User;
