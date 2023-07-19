import { Router } from "express"
const router =Router()

import * as mGlucosaCtrl from '../controllers/m_glucosa.controller'

router.post('/registrarMedicion', mGlucosaCtrl.registrarMedicionGlucosa)
router.get('/obtenerMediciones', mGlucosaCtrl.obtnerMedicionesGlucosa)
router.get('/obtenerMediciones/:id_paciente', mGlucosaCtrl.obtenerMedicionesGlucosaPorPaciente) //
router.delete('/eliminarMedicion/:_id', mGlucosaCtrl.EliminarMedicionGlucosa)

export default router;