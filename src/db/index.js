import mongoose from 'mongoose';
import {DB_NAME} from'../constants.js';

// IIFE 
export const connectDb = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
  }
  catch(err){
    console.error("MONGODB connection Error",err);
    process.exit(1);
  }
}

