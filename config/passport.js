const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/user.model');

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: 'userName' }, (userName, password, done)=>{
            //Match User
            User.findOne({userName: userName})
                .then(user => {
                    if(!user){
                        return done(null, false, {message: 'User not Found' });
                    }
      
                    // Match Pass
                    bcrypt.compare(password, user.password, (err, isMatch)=>{
                        if(err) throw err;

                        if(isMatch){
                            return done(null, user);
                        } else{
                            return done(null, false, {message: 'Password Incorrect.'});
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
      
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
      
}