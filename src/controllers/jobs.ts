import { Request, Response } from 'express'
import Job from '../models/Job'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors'
import User from '../models/User'

export const createJob = async (req:Request,res:Response)=>{
    try {
        console.log(res.locals)

        if(!res.locals.useremail){
            res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY)
            return
        }

        const userEmail:string = res.locals.useremail
        const user = await User.findOne({email: userEmail})
        console.log(user)

        if(!user){
            res.sendStatus(StatusCodes.NOT_FOUND)
            return
        }

        req.body.createdBy = user.id
        const job = await Job.create({...req.body})
        res.status(StatusCodes.CREATED).json({job})
    } catch (error) {
        res.send(error)
    }
}

export const getAllJobs = async (req:Request, res:Response) =>{
    const jobs = await Job.find({createdBy:req.body}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count:jobs.length})
}

export const getJob = async (req:Request,res:Response)=>{
    res.send('getJob is now working')
}

export const updateJob = async (req:Request, res:Response)=>{
    res.send('updateJob is now working')
}

export const deleteJob = async (req:Request, res:Response)=>{
    res.send('deleteJob is now working')
}