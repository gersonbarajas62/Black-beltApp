const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({

    title:{
        type:String,
        require:true 
    },

    description:{
        type:String,
        remoquire:true
    },

    date:{
        type:String
    },
    
    address:{
        street:String,
        city:String,
        number:String,
        country:String,
        state:String,
        zip:String,
        lat:Number,
        long:Number

    },

    assistants:{
        type:[Schema.Types.ObjectId],
        ref:'users'
    },

    created_by:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },

    banner:{
        type:String
    },
    
    tags:{
        type:[String]
    },

    is_active:{
        type:Boolean,
        default:true
    }
    
}, {timestamps:true});

module.exports = mongoose.model('events', EventsSchema);