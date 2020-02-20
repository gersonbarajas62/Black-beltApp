const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({

    title:{
        type:String,
        require:true 
    },

    description:{
        type:String,
    }
})