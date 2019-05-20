import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartSchema = new Schema({
	product_id:{type:mongoose.Schema.Types.ObjectId, ref: 'Products'}, 
	// user_id:[{type:mongoose.Schema.Types.ObjectId, ref: 'Users'}], 
	// quantity: {type: Number, required: true},
});

export default mongoose.model('Cart', cartSchema);