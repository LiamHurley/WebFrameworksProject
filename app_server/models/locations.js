const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    }
 });
 mongoose.model('locations', locationSchema);