const mongoose = require('mongoose');
const Users = mongoose.model('users');

const userCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};
const userLogin = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    userCreate,
    userLogin
};