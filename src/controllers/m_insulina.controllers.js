import M_Insulina from '../models/m_mInsulina';

export const registrarAdministracionInsulina = async (req, res) => {
  try {
    const {
        id_paciente,
        cantidad,
        tipo,
        } = req.body;
    const newMedicion = new M_Insulina({
      id_paciente,
      cantidad,
      tipo,
    })
    const mediconSaved = await newMedicion.save()

    return res.status(200).json({
        mediconSaved,
        message: "Se ha registrado la nueva administracion de la insulina",
    });
} catch (error) {
  console.log(error);
    return res.status(500).json({
        message: "Se ha generado un error al momento de registrar la amin de insulina" });
}

}
export const obtenerAdministracionesInsulina = async (req,res) => {
  try{
    const mediciones = await M_Insulina.find();
    if (!mediciones) {
      return res.status(404).json({
        status: 404,
        message: "No se encontró las administraciones de insulina",
      });
    }     
    return res.status(200).json(
      {
       message: "Se ha obtenido todas las mediciones de insulina",
       data: mediciones}
     );
  } catch (error) {
    return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener las administraciones",
      }
      );
  }
}
export const obtenerAdminInsulinaPorPaciente = async (req,res) => {
  try{
    const {id_paciente} = req.params;
    let mediciones_paciente = await M_Insulina.find({id_paciente:id_paciente}).sort({creadoEn:-1});
    if (!mediciones_paciente) {
      return res.status(404).json({
        message: "No se encontraron administraciones para este paciente",
      });
    }      
    return res.status(200).json(
      {
       message: "Se ha obtenido las administraciones de insulina del paciente",
       data: mediciones_paciente}
     );
  } catch (error) {
      return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener las administraciones del paciente",
      }
      );
  }
}

export const EliminarAdminInsulina = async (req, res) =>{
  try {
    const{_id} =req.params;
    const medicion = await M_Insulina.findById(_id);
    if(!medicion){
      return res.status(404).json({
        message: "No se encontro la medicion"
      });
    }
    await M_Insulina.findByIdAndDelete(_id);
    res.status(200).json({
      status:200,
      message: "Eliminacion exitosa"
     });
  } catch (error) {
    return res.status(500).json(
      {
      message: "Se ha producido un ERROR ",
      }
      );
  }
}