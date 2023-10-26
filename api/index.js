import express from 'express'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

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

app.use(express.json());

app.listen(3000,()=>{
    console.log('server started!!!')
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter)