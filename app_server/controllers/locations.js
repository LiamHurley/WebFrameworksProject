const request = require('request');
const apiOptions = { 
    server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://murmuring-bastion-62732.herokuapp.com/'; 
}

const _renderHomepage = function(req, res, responseBody){
    res.render('index', {
        title: 'Destination Finder',
        pageHeader: { 
            title: 'Destination Finder', 
            strapline: 'Find your next holiday destination!' 
        }, 
        locations: responseBody.locations
        /*newsItems: [{
            headline: 'USA Travel Restrictions Set To Ease',
            blurb: 'US President Joe Biden has announced a further easing of restrictions on Europeans wishing to visit the US. The news has been met '
            + ' with open arms by airline companies, who experienced a surge in European travellers booking flights to the US last night... ',
            link: 'https://www.rte.ie/news/'
        },{
            headline: 'Why You Should Visit The Balkans',
            blurb: 'The Balkans are home to some of Europe\'s most spectacular views, centuries of complex history and wholesome, wallet-friendly cuisine.'
            + ' From the Mediterranean-like atmosphere along the Adriatic Sea in Slovenia and Croatia to the fabled histories of Sarajevo and Belgrade... ',
            link: 'https://www.rte.ie/news/'
        }]*/
    });
};

const homelist = function(req, res){
    const path = '/api/locations'; 
    const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {} 
    }; 

    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body); 
    });
};
    
module.exports = {
    homelist
};    