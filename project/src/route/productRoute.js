import { Router } from 'express';
import { createUser, updateUser } from '../controller/userController.js';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/productController.js';
const router = Router();

/**
    * @swagger
    * tags:
    *   name: Product
    *   description: The product managing API
    * /api/product:
    *  post:
    *    summary: Create a new product
    *    tags: [Products]
    *    requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/definitions/NewProduct'
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.post('/product', createProduct);

/**
    * @swagger
    * tags:
    *   name: Product
    *   description: The product managing API
    * /api/product:
    *  patch:
    *    summary: Update a product
    *    tags: [Products]
    *    requestBody:
    *       content:
    *          application/json:
    *            schema:
    *              $ref: '#/definitions/UpdateProduct'
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.patch('/product', updateProduct);
 /**
    * @swagger
    * tags:
    *   name: Product
    *   description: The product managing API
    * /api/product/{id}:
    *  delete:
    *    summary: Delete a product
    *    tags: [Products]
    *    parameters:
    *     - name: id
    *       in: path
    *       required: true
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.delete('/product/:id', deleteProduct);
/**
    * @swagger
    * tags:
    *   name: Product
    *   description: The product managing API
    * /api/product:
    *  get:
    *    summary: Get all products
    *    tags: [Products]
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.route('/product').get(getProduct);

/**
 * @swagger
 * definitions:
 *   NewProduct:
 *     properties:
 *       name:
 *         type: string
 *         example: refresco
 *       code:
 *         type: string
 *       category:
 *         type: string
 *         example: BEBIDAS
 *       description: 
 *         type: string
 *         example: Bebida con gas
 *       price: 
 *         type: decimal
 *         example: 5,50
 *       amount: 
 *         type: integer
 *         example: 5
 */


/**
 * @swagger
 * definitions:
 *   UpdateProduct:
 *     properties:
 *       id:
 *         type: string
 *       code:
 *         type: string
 *       description: 
 *         type: string
 *         example: Bebida con gas
 *       price: 
 *         type: decimal
 *         example: 5,50
 *       amount: 
 *         type: integer
 *         example: 5
 */


/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       code:
 *         type: string
 *       category:
 *         type: string
 *       description: 
 *         type: string
 *       price: 
 *         type: decimal
 *       amount: 
 *         type: integer
 *       creationDate:
 *         type: Date
 *       deleteDate:
 *         type: Date
 *       status:
 *         type:Boolean
 */

export default router;