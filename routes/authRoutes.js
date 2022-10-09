const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();
/** 
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
*/

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: APIs for authentication
 */

/**
 * @swagger
 * /signup:
 *  get:
 *    summary: sign up page
 *    tags: [Authentication]
 *    responses:
 *      201:
 *        description: good
 */
router.get('/signup', authController.signup_get);

/**
 * @swagger
 * /signup:
 *  post:
 *    summary: sign up
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: good
 *      400:
 *        description: error
 */
router.post('/signup', authController.signup_post);

/**
 * @swagger
 * /login:
 *  get:
 *    summary: login page
 *    tags: [Authentication]
 *    responses:
 *      201:
 *        description: good
 */
router.get('/login', authController.login_get);

/**
 * @swagger
 * /login:
 *  post:
 *    summary: login up
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: good
 *      400:
 *        description: error
 */
router.post('/login', authController.login_post);

/**
 * @swagger
 * /logout:
 *  get:
 *    summary: logout page
 *    tags: [Authentication]
 *    responses:
 *      201:
 *        description: good
 */
router.get('/logout', authController.logout_get);

module.exports = router;