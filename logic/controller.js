var dbService = require("./dbService.js")

exports.getpost = function(req,res){
    dbService.findjob().then((succ)=>{
        console.log('done return');
        var mess ={status:'done',message:succ};
        res.send(mess);
    },(succ)=>{
        console.log('fail ',succ);
        var mess ={status:'error',message:succ};
        res.send(mess);
    });
}


exports.updatepost = (req,res)=>{
    var data = req.body.data.split('|');
    console.log('receive ',data);
    for(var post in data){
        console.log(data[post]);
        var tmp = JSON.parse(data[post]);
        dbService.updatetype(tmp.id,tmp.type);
    }
    
    var mess ={status:'done',message:'Updated'};
    res.send(mess);
}