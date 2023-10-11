
/**
 * Created by Navit
 */

 const { DataTypes, Model } = require("sequelize");
 let dbConnect = require("../dbConnect");
 const User = require('./users');
 
 const sequelizeInstance  = dbConnect.Sequelize;
 
 class post extends Model {}
 
 post.init({
      title: { type: DataTypes.STRING, allowNull: false, required: true },
      description: { type: DataTypes.STRING, allowNull: false, required: true },
      image: { type: DataTypes.STRING, allowNull: false, required: true},
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      likes: { type: DataTypes.INTEGER, defaultValue: 0}
 }, {sequelize: sequelizeInstance, modelName: 'post', timestamps: true, freezeTableName: true})
 
 post.belongsTo(User);
 module.exports = post;
