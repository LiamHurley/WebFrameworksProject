const mongoose = require('mongoose');
const dbURL = "mongodb+srv://liamhurley:<Wounded96>@webframeworksproj.adz3w.mongodb.net/DestinationFinder?retryWrites=true&w=majority";

try{
    mongoose.connect(
        dbURL,
        { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log("Mongoose is connected")
        );
    }
catch(e){
    console.log("could not connect");
}
require('./locations')
require('./users')
require('./news')