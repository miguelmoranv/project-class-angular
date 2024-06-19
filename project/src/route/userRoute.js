import { Router } from 'express';
import { createUser, deleteUser, getUsers, login, updateUser } from '../controller/userController.js';
const router = Router();

/**
    * @swagger
    * tags:
    *   name: User
    *   description: The user managing API
    * /api/user:
    *  post:
    *    summary: Create a new user
    *    tags: [Users]
    *    requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/definitions/NewUser'
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.post('/user', createUser);

/**
    * @swagger
    * tags:
    *   name: User
    *   description: The User managing API
    * /api/user:
    *  patch:
    *    summary: Update a User
    *    tags: [Users]
    *    requestBody:
    *       content:
    *          application/json:
    *            schema:
    *              $ref: '#/definitions/UpdateUser'
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.patch('/user', updateUser);
 /**
    * @swagger
    * tags:
    *   name: User
    *   description: The User managing API
    * /api/user/{id}:
    *  delete:
    *    summary: Delete a User
    *    tags: [Users]
    *    parameters:
    *     - name: id
    *       in: path
    *       required: true
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.delete('/user/:id', deleteUser);
/**
    * @swagger
    * tags:
    *   name: User
    *   description: The User managing API
    * /api/user:
    *  get:
    *    summary: Get all Users
    *    tags: [Users]
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.route('/user').get(getUsers);

 /**
    * @swagger
    * tags:
    *   name: User
    *   description: The user managing API
    * /api/user/login:
    *  post:
    *    summary: Login
    *    tags: [Users]
    *    requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/definitions/Login'
    *    responses:
    *      '200':
    *        description: A successful response
    */ 
router.post('/user/login', login);

/**
 * @swagger
 * definitions:
 *   NewUser:
 *     properties:
 *       username:
 *         type: string
 *       name:
 *         type: string
 *         example: refresco
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       phone: 
 *         type: string
 *       role: 
 *         type: string
 *       password: 
 *         type: string
 */


/**
 * @swagger
 * definitions:
 *   UpdateUser:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       lastName: 
 *         type: string
 *       email: 
 *         type: string
 *       phone: 
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   Login:
 *     properties:
 *       username: 
 *         type: string
 *       password:
 *         type: string
 */


/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       username:
 *         type: string
 *       lastName:
 *         type: string
 *       email: 
 *         type: string
 *       phone: 
 *         type: string
 *       role: 
 *         type: string
 *       creationDate:
 *         type: Date
 *       deleteDate:
 *         type: Date
 *       status:
 *         type:Boolean
 */

export default router;