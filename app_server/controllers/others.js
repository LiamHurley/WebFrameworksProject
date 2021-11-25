const request = require('request');
const apiOptions = { 
    server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://murmuring-bastion-62732.herokuapp.com'; 
}

const about = function(req, res){
    res.render('about', { 
        title: 'About'
    });
};

const register = function(req,res){
    res.render('register', {
        title: 'Register'
    });
}

const _renderLoginPage = function(req, res, responseBody){
    res.render('login', {
        title: 'Login',
        pageHeader: { 
            title: 'Destination Finder', 
            strapline: 'Find your next holiday destination!' 
        }
    });
};

const login = function(req,res){
    const path = '/api/login'; 
    const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {} 
    }; 

    request(requestOptions, (err, response, body) => {
        _renderLoginPage(req, res, body); 
    });
}
  
module.exports = {
    about,
    register,
    login
};   