import express from 'express'
import { json } from 'express';
import 'dotenv/config'
import cors from 'cors'

const app = express()
app.disable('x-powered-by')
app.use(json())

const port = process.env.PORT || 3000 


app.use(cors('*'))

app.listen(port, () => {
    console.log('server up url ')
});

app.get("/",(req,res) => {
    res.send("hola")
})