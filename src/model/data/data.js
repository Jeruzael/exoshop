'use strict';
const {MongoClient, ServerApiVersion} = require('mongodb')
const uri = 'mongodb+srv://Jeruzael08:QUk6aXc96OVjx22v@testing.yzbuj1p.mongodb.net/?retryWrites=true&w=majority'

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
