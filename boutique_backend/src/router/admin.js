const express    = require('express');
const router     = express.Router();

const { registeration } = require('../admin/designer_registration');
const { updateDesignerInformation } = require('../admin/update_designer');

router.post('/designer_registeration', registeration);
router.post('/update_designer', updateDesignerInformation);

module.exports = router;