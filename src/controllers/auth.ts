import { StatusCodes } from 'http-status-codes'
import User from '../models/User'
import {Request, Response} from 'express'
import { BadRequestError, UnauthenticatedError } from '../errors'
import jwt from 'jsonwebtoken'

const JWTSECRET = process.env.JWT_SECRET

export const register = async (req: Request,res: Response)=>{
    
    try {
        if(!JWTSECRET){
            res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY)
            return
        }
        const user = await User.create({...req.body})
        const token = await jwt.sign({email: user.email, name: user.name}, JWTSECRET)
        // const token = await User.prototype.createJWT.call(user)
        res.status(StatusCodes.CREATED).json({user: {name: user.name}, token})
    } catch (error) {
        res.send(error)
    }
    
}

export const login = async (req:Request,res:Response)=>{
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({email})

    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    if(!JWTSECRET){
        res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY)
        return
    }

    const token = await jwt.sign({email: user.email, name: user.name}, JWTSECRET)
    // const token = await User.prototype.createJWT.call(user)
    res.status(StatusCodes.OK).json({user: {name:user.name}, token})
}