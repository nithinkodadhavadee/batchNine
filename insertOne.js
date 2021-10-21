var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.sfvva.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anotherSecondDatabase");
  var objToInsert = {name: 'naanu', email: 'naanu@nandu.com', address: 'nan mane'};
  dbo.collection("anythingWillWork").insertOne(objToInsert, function (err, res){
      if (err) throw err;
      console.log("1 documents inserted");
      db.close();
  });
});