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

/*const locationsReadOne = function (req, res) {
    if (req.params && req.params.locationid) {  
      Location
        .findById(req.params.locationid)
        .exec((err, location) => {
          if (!location) {
            res	
              .status(404) 
              .json({	
                "message": "locationid not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(location);
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "No locationid in request"
        });		
    }
};  
const locationsUpdateOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};
const locationsDeleteOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};*/

module.exports = {
    locationsList
};
