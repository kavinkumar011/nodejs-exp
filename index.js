
const express = require("express");
const app = express();

const Questions=[{
	"id": "101",
	"Question": "1",
	"Answer": "hai welcome"
}]

const PORT = 7000;

app.get("/questions",(request,response)=>{
    response.send(Questions);
    
})




app.listen(PORT,()=>{
    console.log("App started")
});

