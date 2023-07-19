import M_Temperatura from '../models/m_mTemperatura';

export const registrarMedicionTemperatura = async (req, res) => {
  try {
    const {
        id_paciente,
        nivel_temperatura,
        comentario,
        } = req.body;
    const newMedicion = new M_Temperatura({
      id_paciente,
      nivel_temperatura,
      comentario,
    })
    const mediconSaved = await newMedicion.save()

    return res.status(200).json({
        mediconSaved,
        message: "Se ha registrado la nueva medicion de temperatura",
    });
} catch (error) {
  console.log(error);
    return res.status(500).json({
        message: "Se ha generado un error al momento de registrar la nueva medicion de temperatura",
    });
}

}
export const obtenerMedicionesTemperatura = async (req,res) => {
  try{
    const mediciones = await M_Temperatura.find();
    if (!mediciones) {
      return res.status(404).json({
        status: 404,
        message: "No se encontró las mediciones de temperatura",
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
export const obtenerMedicionesTemperaturaPorPaciente = async (req,res) => {
  try{
    const {id_paciente} = req.params;
    let mediciones_paciente = await M_Temperatura.find({id_paciente:id_paciente}).sort({creadoEn:-1});
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

export const EliminarMedicionTemperatura = async (req, res) =>{
  try {
    const{_id} =req.params;
    const medicion = await M_Temperatura.findById(_id);
    if(!medicion){
      return res.status(404).json({
        message: "No se encontro la medicion"
      });
    }
    await M_Temperatura.findByIdAndDelete(_id);
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