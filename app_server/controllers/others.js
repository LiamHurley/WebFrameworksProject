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

const login = function(req,res){
    res.render('login', {
        title: 'Login'
    });
}
  
module.exports = {
    about,
    register,
    login
};
  
    