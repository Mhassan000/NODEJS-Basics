//NodeJS Express
const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');
const app = express();

const PORT = 3000;

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} request for ${req.baseUrl}${req.url} took ${delta}ms`)
})


app.use(express.json());


app.use('/friends',friendsRouter)

app.use ('/messages', messageRouter)



app.get('/',(req,res)=>{
    res.send('Hello World');
});



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
