const about = function(req, res){
    res.render('about', { 
        title: 'About' 
    });
};

const register = function(req,res){
    res.render('register', {
        title: 'Register',
        
        formLabels: {
            formTitle: 'Create An Account',
            nameLabel: 'Your Name',
            emailLabel: 'Your Email',
            passwordLabel: 'Password',
            repeatPasswordLabel: 'Repeat your password',
        }
    });
}

const login = function(req,res){
    res.render('login', {
        title: 'Login',
  
        formLabels: {
          formTitle: 'Login',
          emailLabel: 'Your Email',
          passwordLabel: 'Password'
        }
    });
}
  
module.exports = {
    about,
    register,
    login
};
  
    