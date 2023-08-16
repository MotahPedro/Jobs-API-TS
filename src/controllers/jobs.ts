import { Request, Response } from 'express'

export const createJob = async (req:Request,res:Response)=>{
    res.send('createJob is now working')
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