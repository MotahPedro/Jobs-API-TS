import jwt, { JwtPayload } from 'jsonwebtoken'
import {UnauthenticatedError} from '../errors/unauthenticated'
import {Request, Response, NextFunction} from 'express'
import { StatusCodes } from 'http-status-codes'

const JWTSECRET = process.env.JWT_SECRET

export const authenticateUser = async (req:Request,res:Response,next:NextFunction)=>{

    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new UnauthenticatedError("No token found")
    }
    const token = authHeader.replace('Bearer ', '')


    try {

        if(!JWTSECRET){
            res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY)
            return
        }
       
        const payload = await jwt.verify(token, JWTSECRET) as {email: string}
        
        if(!payload){
            throw new UnauthenticatedError('Invalid token payload')
        }
        
        res.locals.useremail = payload.email

        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid')
    }
}