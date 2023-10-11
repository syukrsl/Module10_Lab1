"use strict";

var Models = require("../models");

const getUsers = (res) => {
    Models.Users.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createUsers = (data, res) => {
    Models.Users.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getUsers, createUsers
}