
import mongoose from 'mongoose';
import express from 'express';
import router from './routers/user-routes.js';
import cors from 'cors';
import blogRouter from './routers/blog-routes.js';

// const express = require('express')
//const mongooseb = require('mongoose')


const app  = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/api/user', router);
app.use('/api/blog', blogRouter);


mongoose.connect('mongodb+srv://japesa:36827225@cluster0.tqw5n1m.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(5000)).then(()=>console.log("Connected to the database and listening to the localhost 5000"))
.catch((err)=>console.log(err))

/*
app.use('/api', (req, res,next)=>{
    res.send("Hello World")
})
*/

