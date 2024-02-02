const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        required:true
    },
    type:'patient'
    

    

})

const Patient = mongoose.model("Patient",patientSchema)
export default Patient