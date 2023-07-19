import { Router } from "express"
const router =Router()

import * as mPesoCtrl from '../controllers/m_peso.controllers'

router.post('/registrarMedicion', mPesoCtrl.registrarMedicionPeso)
router.get('/obtenerMediciones', mPesoCtrl.obtenerMedicionesPeso )
router.get('/obtenerMediciones/:id_paciente',mPesoCtrl.obtenerMedicionesPesoPorPaciente ) //
router.delete('/eliminarMedicion/:_id',mPesoCtrl.EliminarMedicionPeso)

export default router;