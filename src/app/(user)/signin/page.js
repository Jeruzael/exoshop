const {MongoClient, ServerApiVersion} = require("mongodb")

const uri = 'mongodb+srv://Jeruzael08:QUk6aXc96OVjx22v@testing.yzbuj1p.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true, 
        deprecationErrors: true,
    }
});

async function run(){
    try{
        await client.connect();

        await client.db('sample_account').command({ping: 1});
        console.log("Pinged your deployment, You successfully connected to mongoDb!");
    }finally{
        await client.close()
    }
}

//run().catch(console.dir)

export default function Signin(){
    run().catch(console.dir) 
    return(
        <>
            <div>
                <h1>Signin</h1>          
                <p>data</p>      
            </div>
        </>
    )
}