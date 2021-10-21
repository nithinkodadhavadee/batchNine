var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.sfvva.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anotherSecondDatabase");
  dbo.collection("anythingWillWork").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});