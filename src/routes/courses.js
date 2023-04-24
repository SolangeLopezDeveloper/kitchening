const express =require('express');
const router = express.Router();

const {list,detail, add, edit, store, update, remove,search} = require('../controllers/courseController');
const { uploadCoursesImages } = require('../middlewares/upload');
const courseValidator = require('../validations/courseValidator');
const checkUserAdmin = require('../middlewares/checkUserAdmin');


/* /courses */

router
    .get('/list',list)
    .get('/detail/:id',detail)
    .get('/add', checkUserAdmin,add)
    .post('/add',uploadCoursesImages,courseValidator, store)
    .get('/edit/:id',checkUserAdmin,edit)
    .put('/update/:id',uploadCoursesImages, courseValidator, update)
    .delete('/remove/:id',remove)
    .get('/search', search)


module.exports = router;

