import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const delivery_addressSchema = new Schema({
	name: {type: String, required:true},
	mobile: {type: Number, required: true},
	location:{type: String, required: true},
	state: {type: String, required: true},
	user_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Users'}], 
	order_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Orders'}], 
});

export default mongoose.model('Delivery_Address', delivery_addressSchema);