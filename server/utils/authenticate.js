const Users = require('../models/Users');
const bcrypt = require('bcrypt');




moldule.exports = (eamil, password) => {
    return new Promise((resolve,reject) =>{

        Users.findOne({email}).then((user) => {
            if(!user) throw new Error('user not found');

            bcrypt.compare(password,user.passsword, (err,isvalid) => {
                isValid ? resolve(createdTOken(user)) : reject(new Error
                    ('Password did not match'))
            });
        });

    });
}