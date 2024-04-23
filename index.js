import express from 'express'
import { json } from 'express';
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose';

import { userRouter } from './routes/user.js';

const app = express()
app.disable('x-powered-by')
app.use(json())

const port = process.env.PORT || 3000 
const url = process.env.URLMONGO


mongoose.connect(url)
    .then(() => console.log("conectado a la base de datos"))
    .catch((error)=> console.log("error" + error));    



app.use(cors('*'))

app.listen(port, () => {
    console.log('server up url ')
});

app.use('/user',userRouter)