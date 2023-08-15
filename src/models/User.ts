import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { string } from 'joi'

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 50
    },
    email:{
        required:[true, 'Please provide a password'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        maxlength: 12
    }
})

UserSchema.pre('save', async function(next){
    if (this.password){
        const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    }
    next()
})