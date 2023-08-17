import { Request, Response } from 'express'
import Job from '../models/Job'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors'

export const createJob = async (req:Request,res:Response)=>{
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

export const getAllJobs = async (req:Request, res:Response) =>{
    res.send('getAllJobs is now working')
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