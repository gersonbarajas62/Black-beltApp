const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    first_name:{
        type:String,
        require:true 
    },

    last_name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique:true
    },
    
    password:{
        type:String,
        require:true

    },

    birth_date:{
        type:String
    },

    gender:{
        type:String,
        enum:['M','F','0']
    },

    photo:{
        type:String
    },
    
    events_create:{
        type:[Schema.Types.ObjectId],
        ref:'events'
    },

    events_assists:{
        type:[Schema.Types.ObjectId],
        ref:'events'
    },

    is_active:{
        type:Boolean,
        default:true
    }
    
}, {timestamps:true});

UserSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) next();
    const SALT_FACTOR = perseInt(process.env.SALT_FACTOR)
    bcrypt.genSalt(SALT_FACTOR,function(error,salt){
        if(error) return next(error);
        bcrypt.hash(user.password,salt,function(err,hash){
            user.password = hash;
            next();
        })
    })
})

module.exports = mongoose.model('users', UserSchema);