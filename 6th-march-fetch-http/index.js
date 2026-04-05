// http server that supports 4 routes (/sum, /sub, /div, /mul)
// express, hono, elysiajs, trpc

const express = require("express");
const app = express();

app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile("/Users/abuqais/Desktop/Journey2024/HClass/6th-march-fetch-http/index.html");
})

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a); // string 1
    const b = parseInt(req.body.b); // string 2

    const sum = a + b;

    res.json({
        ans: sum
    })  

})

app.post("/sub", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const sub = a - b;

    res.json({
        ans: sub
    })
})


app.post("/mul", function(req, res) {
    const a = parseInt(req.body.a); // string 1
    const b = parseInt(req.body.b); // string 2

    const ans = a * b;

    res.json({
        ans: ans
    })  

})

app.post("/div", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a/b;
    res.json({
        ans: ans
    })
})


app.listen(3002);
