import { Router } from "express"
const router =Router()

import * as mTemperaturaCtrl from '../controllers/m_temperatura.controller'

router.post('/registrarMedicion',mTemperaturaCtrl.registrarMedicionTemperatura )
router.get('/obtenerMediciones',mTemperaturaCtrl.obtenerMedicionesTemperatura )
router.get('/obtenerMediciones/:id_paciente',mTemperaturaCtrl.obtenerMedicionesTemperaturaPorPaciente ) //
router.delete('/eliminarMedicion/:_id', mTemperaturaCtrl.EliminarMedicionTemperatura)

export default router;