
import express from "express";
const app = express();
import { MongoClient } from 'mongodb';

const MONGO_URL = "mongodb://localhost";

 async function getconnection(){

    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongodb connected")
    return client;
 }
 const client = await getconnection();

const Questions=[{
	"id": "101",
	"Question": "1",
	"Answer": "hai welcome"
}]

const PORT = 7000;

app.use(express.json());

app.get("/questions",async (request,response)=>{

    const result = await client.db("B28wd").collection("questions").find({}).toArray()
    response.send(result);
    
})

app.post("/questions",async (request,response)=>{
    const data = request.body;
    const result = await client.db("B28wd").collection("questions").insertMany(data)
    response.send(result);
     d
});




app.listen(PORT,()=>{
    console.log("App started")
});

