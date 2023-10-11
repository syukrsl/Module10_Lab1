"use strict";

var Models = require("../models");

const getComment = (res) => {
    Models.Comments.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createComment = (data, res) => {
    Models.Comments.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getComment, createComment
}