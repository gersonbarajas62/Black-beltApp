const mongoose = require('mongoose');

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
        type:Date,
        require:true,
        unique:true
    },
    
    password:{
        type:String,
        require:true

    },

    birth_date:{
        type:Date
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

module.exports = mongoose.model('events', EventsSchema);