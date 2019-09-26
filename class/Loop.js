var config = require("../config")
var ABI = require("../contract/advABI.json")
class LoopClass {
    constructor(){
      this.count = 0;
    }
    async start(){
      
      let that = this;
        setInterval(async function(){
          
          try{
                let adv = await config.adBoardHistory.findOne({where:{"ad_id":that.count}})
                if(!adv){
                  let data = await config.instanceAdv.methods.getAdBoardData(that.count).call();
              // console.log(data)
                  if(data && data.lastTaxPayTimestamp!=0){
                    let address = await config.instanceAdv.methods.ownerOf(that.count).call();
                    let price = data.price;
                    let parentId = data.parentId;
                    let deposit = data.deposit;
                    let content = data.content;
                    let taxRate = data.taxRate;
                    let lastTaxPayTimestamp = data.lastTaxPayTimestamp;
                    
                  await config.adBoardHistory.create({
                    ad_id: that.count,
                    parent_id: parentId,
                    owner_address: address,
                    price: price,
                    deposit: deposit,
                    last_tax_pay_timestamp: lastTaxPayTimestamp,
                    content: content,
                    taxRate:taxRate
                  })
                }
                that.count++;
                
              }
            }catch(e){
              console.log("error...")
            }
          },10000)   
    }
}
var loop = new LoopClass();
loop.start();