import { Document } from 'mongoose'

interface UserDocument extends Document {
    name: string,
    email: string,
    password: string,
    comparePassword(candidatePassword:string): Promise<boolean>
}

export default UserDocument