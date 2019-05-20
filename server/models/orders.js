import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
	price: {type: Number, required: true},
	product_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Products'}], 
	user_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Users'}], 
	quantity: {type: Number, required: true},
});

export default mongoose.model('Orders', ordersSchema);
