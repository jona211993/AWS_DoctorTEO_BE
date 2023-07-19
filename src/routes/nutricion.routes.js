import { Router } from "express"
const router =Router()

import * as nutricionCtrl from '../controllers/nutricion.controllers'

router.post('/registrarDieta',nutricionCtrl.registrarDieta)
router.get('/obtenerDietas', nutricionCtrl.obtenerTodasLasDietas)
router.get('/obtenerDietaPaciente/:id_paciente',nutricionCtrl.obtenerDietaPaciente) //
router.delete('/eliminarDieta/:_id',nutricionCtrl.EliminarDieta)

export default router;