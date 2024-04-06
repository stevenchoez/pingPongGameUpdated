import express from 'express'
import cors from 'cors'
import db from './database/db.js';
import userRoutes from './routes/routes.js';


const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)

try{
    await db.authenticate()
    console.log('Succesfully connection')
} catch(error){
    console.log(`Error: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

app.listen(8000, ()=>{
    console.log('Server running')
})