const db = require('mongoose');

const TimelineSchema = new db.Schema({
 
  userId:mongoose.Schema.Types.ObjectId, 
  googleId:String,
  dateStart: Date,
  dateEnd: Date,
  place: String,
  src: String,
  lat:String,
  lng: String,
});

module.exports = db.model('Timeline', TimelineSchema);
