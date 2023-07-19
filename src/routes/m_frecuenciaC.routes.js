import { Router } from "express"
const router =Router()

import * as mFrecuenciaCtrl from '../controllers/m_frecuenciaC.controllers'

router.post('/registrarMedicion',mFrecuenciaCtrl.registrarMedicionFrecuenciaC)
router.get('/obtenerMediciones',mFrecuenciaCtrl.obtenerMedicionesFrecuenciaC)
router.get('/obtenerMediciones/:id_paciente',mFrecuenciaCtrl.obtenerMedicionesFrecuencia_C_PorPaciente ) //
router.delete('/eliminarMedicion/:_id',mFrecuenciaCtrl.EliminarMedicionFrecuenciaC)

export default router;