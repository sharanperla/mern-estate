import express from 'express'
import userRouter from './routes/user.route.js'

import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
console.log('connected to mogodb');
}).catch((err)=>{
    console.log(err);
}
)
const app=express();

app.listen(3000,()=>{
    console.log('server started!!!')
})

app.use('/api/user',userRouter);