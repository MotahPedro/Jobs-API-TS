import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserDocument from './UserDocument'

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required:[true, 'Please provide an email'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        maxlength: 12,
    }
})

UserSchema.pre('save', async function(next){
    if (this.password){
        const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    }
    next()
})


UserSchema.methods.createJWT = async function(){
    try {
        const jwtSecret: string = process.env.JWT_SECRET || ''
        const token = jwt.sign(
        {userId: this._id, name:this.name},
        jwtSecret,
        {expiresIn: process.env.JWT_LIFETIME}
    )
    return token
    } catch (error) {
        throw error
    }
}

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
}

const User = mongoose.model<UserDocument>('User', UserSchema)

export default User