var axios = require('axios');
function te1(){
    axios.post("http://localhost:3000/get_adv_one",{"ad_id":1}).then(function(res){
        console.log("res:",res.data.resp)
    })
}
function te2(){
    axios.post("http://localhost:3000/get_adv_list",{}).then(function(res){
        console.log("res:",res.data.resp)
    })
}

te1()
te2()