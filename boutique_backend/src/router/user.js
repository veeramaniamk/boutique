const express        = require('express');
const router         = express.Router();

const { signup, signin }   = require('../user/authentication');
const { chagneProfileImage, modifyUserInfo, changePassword }  = require('../user/updateuser');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/update_profile_photo', chagneProfileImage);
router.post('/update_user', modifyUserInfo);
router.post('/change_password', changePassword);

module.exports = router;