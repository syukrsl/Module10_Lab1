"use strict";
const sequelize = require("sequelize");
var Models = require("../models");

const getPost = (res) => {
    Models.Posts.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createPost = (data, res) => {
    Models.Posts.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const addLikes = (data, res) => {
    let criteria = {
        where: {
            id: data.postId
        }
    }
    let dataToUpdate = {
        likes: sequelize.literal('likes + 1') 
    }
    Models.Posts.update(dataToUpdate, criteria).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPost, createPost, addLikes
}