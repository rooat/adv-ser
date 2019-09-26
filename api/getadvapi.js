var config = require('../config')
exports.get_adv_one =async (req, res, next) => {
	let ad_id = req.body.ad_id;
	if(ad_id){
		let obj = await config.adBoardHistory.findOne({"ad_id":ad_id})
		return res.send({"resp":obj})
	}
	return res.send({"resp":"params invalid"});
}
exports.get_adv_list =async (req, res, next) => {
	let datas = await config.adBoardHistory.findAll({order:[['ad_id','DESC']]});
	return res.send({"resp":datas});
}
