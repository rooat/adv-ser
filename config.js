const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/2975a23195b64c3d8021655e2821bd9d");
const Sequelize = require('sequelize');

//var sequelize = new Sequelize('mysql://root:HWLhwl@#896@localhost:3306/sql_5g_hjth');

const config = {
    database: 'adv_db',
    username: 'root',
    password: 'HWLhwl!!896',
    host: '127.0.0.1',
    port: 3306
};

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    timestamps: false
    //最好关掉timestamps , 框架自动帮你添加时间到UpdatedAt上边
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    var adBoardData = sequelize.define('ad_board_data',{
        id:{ type:Sequelize.BIGINT(11), allowNull: false, primaryKey: true, autoIncrement: true},
        ad_id:{ type:Sequelize.BIGINT(11), uniqueKey:true },
        parent_id:Sequelize.BIGINT(11),
        owner_address:Sequelize.STRING(100),
        price:Sequelize.STRING(100),
        deposit:Sequelize.STRING(100),
        last_tax_pay_timestamp:Sequelize.STRING(100),
        content:Sequelize.TEXT(50),
    },{
        freezeTableName:true,
        timestamps: false,
        indexes: [{
            unique: true,
            fields: ['ad_id']
        }]
    });
    
    var adBoardHistory = sequelize.define('ad_board_history',{
        id:{ type:Sequelize.BIGINT(11), primaryKey:true },
        ad_id:Sequelize.BIGINT(11),
        parent_id:Sequelize.BIGINT(11),
        owner_address:Sequelize.STRING(100),
        price:Sequelize.STRING(100),
        deposit:Sequelize.STRING(100),
        last_tax_pay_timestamp:Sequelize.STRING(100),
        content:Sequelize.TEXT(50),
    },{
        freezeTableName:true,
        timestamps: false
    });;

const tokenABI = require('./contract/tokenABI.json');
const configdata = require('./contract/contractAdd.json');
const advABI = require('./contract/advABI.json');
const tokenAddress = configdata.tokenAddress;
const artAddress  = configdata.artAddress;

const instanceToken = new web3.eth.Contract(tokenABI,tokenAddress);
const instanceAdv = new web3.eth.Contract(advABI,artAddress);

module.exports = {
	web3,instanceToken,instanceAdv,tokenAddress,adBoardData,adBoardHistory
}


// CREATE TABLE `advdatas` (
//   `d_id` int(11) NOT NULL AUTO_INCREMENT,
//   `address` varchar(50) NOT NULL,
//   `value` varchar(30) NOT NULL,
//   `texts` text NOT NULL,
//   `timestamps` varchar(30) NOT NULL,
//   PRIMARY KEY (`d_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;