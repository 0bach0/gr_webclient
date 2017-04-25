var controller = require("./logic/controller.js")

module.exports = function(app){
    app.get("/getpost",controller.getpost);
    app.post("/updatepost",controller.updatepost);
}