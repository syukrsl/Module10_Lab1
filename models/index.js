/**
 * Created by Navit
 */
 'use strict'
 const Users = require('./users')
 const Posts = require('./posts')
 const Comments = require('./comments')
 async function init () {
   await Users.sync();
   await Posts.sync();
   await Comments.sync();
 };
 
 init();
 module.exports = {
   Users,
   Posts,
   Comments
 };