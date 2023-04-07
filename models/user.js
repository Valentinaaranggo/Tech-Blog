const sequelize= require('../config/connection');
const{ Model, DataTypes }= require('sequelize');

const bcrypt= require('bcrypt');

class User extends Model{

}


User.init(
    {

    },
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: "user",
}
)