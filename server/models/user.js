var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema ({
  name: String,
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

mongoose.model('User', UserSchema);
