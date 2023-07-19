import { Router } from "express"
const router =Router()

import * as mPresionACtrl from '../controllers/m_presionA.controller'

router.post('/registrarMedicion', mPresionACtrl.registrarMedicionPresionA)
router.get('/obtenerMediciones', mPresionACtrl.obtenerMedicionesPresionA)
router.get('/obtenerMediciones/:id_paciente', mPresionACtrl.obtenerMedicionesPresionA_PorPaciente) //
router.delete('/eliminarMedicion/:_id', mPresionACtrl.EliminarMedicionPresionA)

export default router;