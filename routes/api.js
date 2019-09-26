var express = require('express');
var router = express.Router();

var auth = function (req, res, next) {
	if (req.session && req.session.isLogged) {
		return next();
		// req.session.destroy();
	}	
	else
		return res.json({ status: 'FAILED', message: 'Please Enter Deails gain.' });
};
router.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

var getadvapi = require('../api/getadvapi');

router.post('/get_adv_one', getadvapi.get_adv_one);
router.post('/get_adv_list', getadvapi.get_adv_list)
module.exports = router;
