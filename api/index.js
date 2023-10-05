import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=> {
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
});


// allow j son as an input of the server
app.use(express.json());
app.use('/api/user' , userRouter);
app.use('/api/auth', authRouter);

app.get('/',(req,res) => {
    res.send('hello');
})

app.listen(3000 , ()=> {
    console.log("server is running on port 3000");
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });