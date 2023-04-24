var express = require('express');
var router = express.Router();

/* GET users listing. */
const{register,login,profile,processLogin,processRegister,update,logout,list}= require('../controllers/userController')
const checkUser = require('../middlewares/checkUser');
const checkUserAdmin = require('../middlewares/checkUserAdmin');
const checkUserLogin = require('../middlewares/checkUserLogin');
const { uploadUserImage } = require('../middlewares/upload');
const { registerUserValidator, loginUserValidator } = require('../validations');


/* /users */
router
    .get('/register',checkUser, register)
    .post('/register',registerUserValidator, processRegister)
    .get('/login',checkUser, login)
    .post('/login',loginUserValidator,processLogin)
    .get('/profile',checkUserLogin, profile)
    .put('/update',uploadUserImage.single('image'),update)
    .get('/logout',checkUserLogin,logout)
    .get('/', list)

module.exports = router;
