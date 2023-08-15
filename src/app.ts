import 'express-async-errors'
import {Request,Response} from 'express'
import express, {Express} from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app : Express = express()

import {connectDB} from './db/connect'

// Routers
import authRouter from './routes/auth'
import jobsRouter from './routes/jobs'


import { notFoundMiddleware } from './middleware/not-found'
import {errorHandlerMiddleware} from './middleware/error-handler'

app.use(express.json())

// Extra packages

// Base page
app.get('/', (req: Request,res: Response)=>{
    res.send('jobs api')
})

//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>
        console.log(`Server is listening on port ${port}...`))
    } catch (error){
        console.log(error)
    }
}

start()