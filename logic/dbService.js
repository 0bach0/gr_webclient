var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://neo4j:root@fbneo4j:7474');

exports.findjob = function(){
    return new Promise(function(resolve,reject){
        db.cypher({
            // query: 'MATCH (post:Post) WHERE NOT EXISTS (post.classify) SET post.classify=0 RETURN post.message,post.id LIMIT 20'
            query: 'MATCH (post:Post) WHERE NOT EXISTS (post.classify) SET post.classify=-1 RETURN post.message AS message,post.id AS id LIMIT 20'
        }, (err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}

exports.updatetype = (id,type)=>{
    console.log(id,type);
    
    db.cypher({
            query: 'MATCH (post:Post{id:{id}}) SET post.classify = {type}',
            params: {
                id: id,
                type: type
            }
            
    }, (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('done ',id,type);
        }
    });
}