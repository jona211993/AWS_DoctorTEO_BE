import { Router } from "express"
const router =Router()

import * as mInsulinaCtrl from '../controllers/m_insulina.controllers'

router.post('/registrarAdministracion',mInsulinaCtrl.registrarAdministracionInsulina)
router.get('/obtenerAdministraciones',mInsulinaCtrl.obtenerAdministracionesInsulina )
router.get('/obtenerAdministracionesPaciente/:id_paciente',mInsulinaCtrl.obtenerAdminInsulinaPorPaciente ) //
router.delete('/eliminarAdministracion/:_id',mInsulinaCtrl.EliminarAdminInsulina)

export default router;