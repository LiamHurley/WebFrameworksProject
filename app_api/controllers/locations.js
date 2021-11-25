const mongoose = require('mongoose');
const Location = mongoose.model('locations');

const _buildLocationList = function(req,res,results){
    let locations = [];
    results.forEach((doc) => {
      locations.push({
        name: doc.name,
        image: doc.image,
        alt: doc.alt,
        bio: doc.bio,
        features: doc.features
      });
    });
    return locations;
};

const locationsList = function (req, res){
    Location.aggregate(
    [
      {
        '$match':{
          name: {$exists:true}
        }
      }
    ],
      function(err, results){
        const locations = _buildLocationList(req,res,results);
        res
        .status(200)
        .json({locations});
      }
    )
};

module.exports = {
    locationsList
};
