import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
dotenv.config();

import {createRoles} from './libs/initialSetup'
import authRoutes from './routes/auth.routes'
import glucosaRoutes from './routes/m_glucosa.routes'
import presionARoutes from './routes/m_presionA.routes'
import temperaturaRoutes from './routes/m_temperatura.routes'
import pesoRoutes from './routes/m_peso.routes'
import oximetriaRoutes from './routes/m_oximetria.routes'
import frecuenciaRoutes from './routes/m_frecuenciaC.routes'
import UsersRoutes from './routes/user.routes'
import NutricionRoutes from './routes/nutricion.routes'
import insulinaRoutes from './routes/m_insulina.routes'

const cors = require('cors')
let corsOptions={
   origin: '*',
};
const app = express()
createRoles();
app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req,res) =>{
   res.json({    
   })
   
})
app.use('/api/glucosa',glucosaRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/presion_a',presionARoutes)
app.use('/api/temperatura',temperaturaRoutes)
app.use('/api/peso',pesoRoutes)
app.use('/api/oximetria',oximetriaRoutes)
app.use('/api/frecuenciaC',frecuenciaRoutes)
app.use('/api/usuarios',UsersRoutes)
app.use('/api/nutricion',NutricionRoutes)
app.use('/api/insulina',insulinaRoutes)
export default app;