import dotenv from 'dotenv';
import {connectDb} from './db/index.js';

dotenv.config({
  path: './.env'
});

connectDb()
.then(()=>{
})
.catch((err)=>{
  console.error("MONGODB connection Error !!!",err);
});