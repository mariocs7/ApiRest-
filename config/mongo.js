const mongoose = require("mongoose")

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI
    await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    (err, res) => {
        if(!err){
            console.log("Conexión correcta!")
        }else{
            console.log("Error de conexión")
        }
    }




}


module.exports = dbConnect