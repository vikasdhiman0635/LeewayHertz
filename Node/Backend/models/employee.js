const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id: {type: String},
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    mobile: { type: Number },
    image: { type: String }
});

module.exports = { Employee };