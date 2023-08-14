import mongoose from 'mongoose'

export const connectDB = (url: string|undefined = process.env.MONGO_URL): Promise<typeof mongoose> => {
  if(!url){
    throw new Error('url do MongoDB não foi fornecida')
  }
    return mongoose.connect(url)
}