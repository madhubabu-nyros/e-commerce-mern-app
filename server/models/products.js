import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productsSchema = new Schema({
	image: {type:'String', required: true},
	product_name: {type:'String', required: true},
	color: {type:'String', required: true},
	price: {type: Number, required: true},
	discription1: {type: 'String', required:true},
	discription2: {type: 'String', required:true},
	discription3: {type: 'String', required:true},
	discription4: {type: 'String', required:true},
	discription5: {type: 'String', required:true},
	discription6: {type: 'String', required:true},
	discription7: {type: 'String', required:true},
	name: {type: 'String', required: true},
	size: {type: 'String', required: true},

});

export default mongoose.model('Products', productsSchema);

