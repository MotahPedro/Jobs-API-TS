import express from 'express'
const authRouter = express.Router()
import {register, login} from '../controllers/auth'

authRouter.post('/register', register)
authRouter.post('/login', login)

export default authRouter