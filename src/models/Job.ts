import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: [true, 'Please provide company name']
    },
    position:{
        type: String,
        required: [true, 'Please provide a position'],
        maxlength: 100
    },
    status:{
        type: String,
        enum: ['interview','declined','pending'],
        default: 'pending'
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide an user']
    }
}, {timestamps: true})

const Job = mongoose.model('Job', jobSchema)

export default Job