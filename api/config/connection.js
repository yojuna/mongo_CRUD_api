const dbConfig = require('./dbConfig')

const { MongoClient } = require('mongodb')
// get mongoclient uri from config file
const uri = dbConfig.url;

// create the mongo client
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function runMongo() {
	try {
		// connect
		await client.connect();

		// establish connection and verify by pinging
		await client.db("admin").command({ ping: 1 });
		console.log('connection successful');
	} finally {
		// ensures that client closes after finishing or error
		await client.close();
	}
}

// run().catch(console.dir);

module.exports = runMongo;
