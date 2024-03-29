'use strict';
const {MongoClient, ServerApiVersion} = require('mongodb')
const uri = process.env.MONGO_DB_KEY

const client = new MongoClient(uri, {
    ServerApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export async function Run(){
    try{
        await client.connect();
        await client.db("admin").command({ping: 1})
        console.log("Pinged your deployment. You successfully connected to MongoDB!")
        
    }finally{
        await client.close()
    }
}
