import express from 'express'
const jobsRouter = express.Router()
import {createJob, getAllJobs, getJob, updateJob, deleteJob} from '../controllers/jobs'
import exp from 'constants'

jobsRouter.route('/').post(createJob).get(getAllJobs)
jobsRouter.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

export default jobsRouter