
/**
 * Created by Navit
 */

 const { DataTypes, Model } = require("sequelize");
 let dbConnect = require("../dbConnect");
 const User = require('./users');
 const Post = require('./posts');
 
 const sequelizeInstance  = dbConnect.Sequelize;
 
 class comment extends Model {}
 
 comment.init({
      comment: { type: DataTypes.STRING, allowNull: false, required: true },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: Post,
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      }
 }, {sequelize: sequelizeInstance, modelName: 'comment', timestamps: true, freezeTableName: true})
 
 comment.belongsTo(User);
 comment.belongsTo(Post);
 module.exports = comment;