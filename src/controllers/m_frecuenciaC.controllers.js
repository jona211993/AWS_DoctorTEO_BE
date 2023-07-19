import M_FrecuenciaC from '../models/m_mFrecuenciaC';

export const registrarMedicionFrecuenciaC = async (req, res) => {
  try {
    const {
        id_paciente,
        valor,
        comentario,
        } = req.body;
    const newMedicion = new M_FrecuenciaC({
      id_paciente,
      valor,
      comentario,
    })
    const mediconSaved = await newMedicion.save()

    return res.status(200).json({
        mediconSaved,
        message: "Se ha registrado la nueva medicion de la frecuencia cardiaca",
    });
} catch (error) {
  console.log(error);
    return res.status(500).json({
        message: "Se ha generado un error al momento de registrar la nueva medicion de la frecuencia cardiaca",
    });
}

}
export const obtenerMedicionesFrecuenciaC = async (req,res) => {
  try{
    const mediciones = await M_FrecuenciaC.find();
    if (!mediciones) {
      return res.status(404).json({
        status: 404,
        message: "No se encontró las mediciones de la frecuencia cardiaca",
      });
    }     
    return res.status(200).json(
      {
       message: "Se ha obtenido todas las mediciones registradas",
       data: mediciones}
     );
  } catch (error) {
    return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener las mediciones",
      }
      );
  }
}
export const obtenerMedicionesFrecuencia_C_PorPaciente = async (req,res) => {
  try{
    const {id_paciente} = req.params;
    let mediciones_paciente = await M_FrecuenciaC.find({id_paciente:id_paciente}).sort({creadoEn:-1});
    if (!mediciones_paciente) {
      return res.status(404).json({
        message: "No se encontraron mediciones para este paciente",
      });
    }      
    return res.status(200).json(
      {
       message: "Se ha obtenido las mediciones del paciente",
       data: mediciones_paciente}
     );
  } catch (error) {
      return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener las mediciones del paciente",
      }
      );
  }
}

export const EliminarMedicionFrecuenciaC = async (req, res) =>{
  try {
    const{_id} =req.params;
    const medicion = await M_FrecuenciaC.findById(_id);
    if(!medicion){
      return res.status(404).json({
        message: "No se encontro la medicion"
      });
    }
    await M_FrecuenciaC.findByIdAndDelete(_id);
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