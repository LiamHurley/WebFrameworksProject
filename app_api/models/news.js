const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    blurb: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
 });
 mongoose.model('news', newsSchema);