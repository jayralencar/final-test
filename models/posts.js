var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/finalTest');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var Post = new Schema({
    idPost    : ObjectId,
    title     : String,
    body      : String,
});


module.exports = mongoose.model('post', Post);;