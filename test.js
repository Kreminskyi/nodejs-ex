 var mongodb = require('mongodb'),
 mongoURL='mongodb://127.0.0.1:27017';
 var db = null,
 mongoURLLabel='',
    dbDetails = new Object();
mongodb.connect(mongoURL, function(err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
	  });
  
if (db) {
	console.log('Connected to MongoDB at: %s', db);
    
	} 