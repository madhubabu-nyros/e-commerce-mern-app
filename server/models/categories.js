import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorysSchema =new Schema({
	category_name: {type: String, required : true},
	status : {type: Number},
});
export default mongoose.model('Categories', categorysSchema);