import { Router } from 'express';
import { createUser, updateUser } from '../controller/userController.js';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/productController.js';
const router = Router();

router.post('/users', createUser);
router.patch('/users/:id', updateUser);


router.post('/product', createProduct);
router.patch('/product', updateProduct);
router.delete('/product/:id', deleteProduct);
/**
    * @swagger
    * /api/product:
    *  get:
    *    description: Use to request all products
    *    responses:
    *      '200':
    *        description: A successful response
    */
router.route('/product').get(getProduct);

export default router;