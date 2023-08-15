import { StatusCodes } from 'http-status-codes'
import User from '../models/User'
import {Request, Response} from 'express'
import { BadRequestError, UnauthenticatedError } from '../errors'

export const register = async (req: Request,res: Response)=>{
    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user: {name: user.name}})
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

    res.status(StatusCodes.OK).json({user: user.name})
}