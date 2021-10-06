const about = function(req, res){
    res.render('about', { title: 'About' });
};

const register = function(req,res){
    res.render('register');
}

const login = function(req,res){
  res.render('login');
}
  
module.exports = {
    about,
    register,
    login
};
  
    