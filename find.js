var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.sfvva.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anotherSecondDatabase");
//   dbo.collection("anythingWillWork").find({}).toArray(function(err, result) {
  dbo.collection("anythingWillWork").find({}, {projection: {_id:0, name:1, email:1}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});