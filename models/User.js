const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	lastName: String,
	email: String,
	password: String,
	programId: [ { type: Schema.Types.ObjectId, ref: 'program' } ],
	favorite: [ { type: Schema.Types.ObjectId, ref: 'favorite' } ]
});

const user = mongoose.model('user', userSchema);

module.exports = user;
