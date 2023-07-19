import mongoose from "mongoose";


var url = process.env.MONGO_DB_URL;

mongoose.connect(url,{dbName: "PytoDoctorTEO"})
.then(()=> console.log("Connected to Mongo Atlas"))
.catch((e)=> console.log("Error connecting to Mongo Atlas" + e));