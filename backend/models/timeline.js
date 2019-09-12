
     const mongoose = require("mongoose");

     const timelineSchema = new mongoose.Schema({
       dateStart: Date,
       dateEnd: Date,
       place: String,
       src: String,
      
     });
     
     module.exports = mongoose.model('Timeline', timelineSchema);