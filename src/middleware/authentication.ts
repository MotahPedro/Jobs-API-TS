import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import {UnauthenticatedError} from '../errors/unauthenticated'
import {Request, Response, NextFunction} from 'express'


// export const authenticateUser = async (req:Request,res:Response,next:NextFunction)=>{

//     const authHeader = req.headers.authorization
//     if(!authHeader||!authHeader.startsWith('Bearer ')){
//         throw new UnauthenticatedError("Authentication invalid")
//     }
//     const token = authHeader.split(' ')[1]

//     try {
//         const payload = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload
//         if(!payload.userId){
//             throw new UnauthenticatedError('Invalid token payload')
//         }
//         req.user = {userId: payload.userId as string}
//         next()
//     } catch (error) {
//         throw new UnauthenticatedError('Authentication Invalid')
//     }
// }