import { Schema,model } from "mongoose";
import bcrypt from 'bcryptjs'
const moment = require('moment');

const userSchema = new Schema(
{
    username:{
        type:String,
        unique:true
    },
   
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
       
    },
    roles:{
        ref : "Role",
        type: Schema.Types.ObjectId
    },
    estado:{
        type:String        
    },
    creadoEn:{
        type: Date,
        default:Date.now(),
        //Esto me trae la fecha en el formato que quiero
        get: function (value) {
            return moment(value).format('DD-MM-YYYY');
          },
    }
    
},
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
{ collection: 'Usuarios' },
{timestamps: true , versionKey:false},

);
// para encriptar
userSchema.statics.encryptPassword= async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)

}
// para comparar
userSchema.statics.comparePassword= async (password, receivedpassword) => {
    return await bcrypt.compare(password,receivedpassword)

}

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let User = model('User',userSchema);
module.exports = User;