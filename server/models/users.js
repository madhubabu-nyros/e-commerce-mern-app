import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	name: {type:'String', required: true},
	mobile: {type: Number, required: true},
	email: {type: 'String', required: true},
	password:{type:'String', required: true},
});

export default mongoose.model('Users', usersSchema);