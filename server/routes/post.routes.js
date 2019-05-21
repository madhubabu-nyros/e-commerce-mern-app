import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import * as DeliveryAddressController from '../controllers/deliveryAddress.controller';
import * as ProductDetailsController from '../controllers/product.controller';
import * as CategoryDetailsController from '../controllers/categories.controller';
import * as CartDetailsController from '../controllers/cart.controller';
import * as OrderDetailsController from '../controllers/orders.controller';
import * as BrandDetailsController from '../controllers/brand.controller';



const router = new Router();


//Create Users
router.route('/createUsers').post(UserController.createUsers);

// Get Users
router.route('/getUsers').post(UserController.getUsers);

//Create Delivery Address
router.route('/createDeliveryAddress').post(DeliveryAddressController.createDeliveryAddress);

//Get Delivery Address details
router.route('/getDeliveryAddress').post(DeliveryAddressController.getDeliveryAddress);

//Create Products Details
router.route('/createProducts').post(ProductDetailsController.createProducts);

// Get Products 
router.route('/getProducts').post(ProductDetailsController.getProducts);

//Create Category Details
router.route('/createCategories').post(CategoryDetailsController.createCategories);

//Get Category Details
router.route('/getCategories').post(CategoryDetailsController.getCategories);

//Create Cart Details 
router.route('/createCart').post(CartDetailsController.createCart);

//Get Cart Details
router.route('/getCart').post(CartDetailsController.getCart);

// Delete Cart Details
router.route('/deleteCart').post(CartDetailsController.deleteCart);

//Create Orders 
router.route('/createOrders').post(OrderDetailsController.createOrders);

//Get Ordres
router.route('/getOrders').post(OrderDetailsController.getOrders);

//Create Brand Details
router.route('/createBrand').post(BrandDetailsController.createBrand);

//Get Brand Details
router.route('/getBrand').post(BrandDetailsController.getBrand);

export default router;