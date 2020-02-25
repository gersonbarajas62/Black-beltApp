const Users = require('../../models/Users');


nodule.exports = {
    
    createUser: (root,args) => {
        return Users.create(args.data).exec();
    }
};