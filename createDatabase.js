var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://admin:admin@cluster0.sfvva.mongodb.net/anotherFirstDatabaseAgain?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("Database Created!");
    db.close();
});