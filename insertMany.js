var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.sfvva.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("anotherSecondDatabase");
  var objToInsert = [
    {name: 'neenu', email: 'neenu@nindu.com', address: 'nin mane'},
    {name: 'naavu', email: 'naavu@namdu.com', address: 'nam mane'},
    {name: 'neevu', email: 'neevu@nimdu.com', address: 'nim mane'},
    {name: 'ellaru', email: 'ellaru@ellardu.com', address: 'ellara mane'}
  ];
  dbo.collection("anythingWillWork").insertMany(objToInsert, function (err, res){
      if (err) throw err;
      console.log(res.insertedCount + " documents inserted");
      db.close();
  });
});