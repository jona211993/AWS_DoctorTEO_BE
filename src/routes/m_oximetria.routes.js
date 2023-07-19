import { Router } from "express"
const router =Router()

import * as mOximetriaCtrl from '../controllers/m_oximetria.controllers'

router.post('/registrarMedicion',mOximetriaCtrl.registrarMedicionOximetria)
router.get('/obtenerMediciones',mOximetriaCtrl.obtenerMedicionesOximetria )
router.get('/obtenerMediciones/:id_paciente',mOximetriaCtrl.obtenerMedicionesOximetriaPorPaciente ) //
router.delete('/eliminarMedicion/:_id',mOximetriaCtrl.EliminarMedicionOximetria)

export default router;