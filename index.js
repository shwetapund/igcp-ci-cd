import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/', (req,res)=>{
    res.send(`<h1>All Good</h1>`)
})

app.get('/text',(req,res)=>{
    res.send(`<h1>Hey I am working</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})