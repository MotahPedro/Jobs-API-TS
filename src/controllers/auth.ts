import express from 'express'
import {Request, Response} from 'express'

export const register = async (req: Request,res: Response)=>{
    res.send('Register is now working')
}

export const login = async (req:Request,res:Response)=>{
    res.send('Login is now working')
}