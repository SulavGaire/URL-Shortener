import dotenv from 'dotenv';
import connectDb from './db/index.js';
import app from './app.js';

dotenv.config({
  path: './.env'
});

connectDb()
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`\n Server is running on PORT: ${process.env.PORT}`);
  });
})
.catch((err)=>{
  console.error("MONGODB connection Error !!!",err);
});