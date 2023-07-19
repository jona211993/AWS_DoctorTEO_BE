import { Router } from "express"
const router =Router()

import * as usuariosCtrl from '../controllers/usuarios.contollers'

router.get('/obtenerUsuarios',usuariosCtrl.obtenerUsuarios )
router.get('/obtenerUsuario/:id_paciente',usuariosCtrl.obtenerUsuarioPorId ) //


export default router;