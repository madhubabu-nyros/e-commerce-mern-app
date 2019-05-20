import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const brandSchema = new Schema({
	brand_name: {type:'String', required: true},
	status: {type: Number, required: true},
});

export default mongoose.model('Brand', brandSchema);