const { index,detail,verifyEmail } = require('../../controllers/api/userApiController');

const router = require('express').Router();


router
.get('/',index)
.get('/:id', detail)
.get('/verify-email', verifyEmail)

module.exports = router;