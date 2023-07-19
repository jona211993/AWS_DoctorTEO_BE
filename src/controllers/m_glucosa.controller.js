import M_Glucosa from '../models/m_mGlucosa'
export const registrarMedicionGlucosa = async (req, res) =>{
  try {
    const {
        id_paciente,
        nivel_glucosa,
        comentario,
        } = req.body;
    const newMedicion = new M_Glucosa({
      id_paciente,
      nivel_glucosa,
      comentario,      
    })
    const mediconSaved = await newMedicion.save()

    return res.json({
        status: 201,
        mediconSaved,
        message: "Se ha registrado la nueva medicion de glucosa",
    });
} catch (error) {
  console.log(error);
    return res.json({
        status: 500,
        message: "Se ha generado un error al momento de registrar la nueva medicion de glucosa",
    });
}
}
export const obtnerMedicionesGlucosa = async (req, res) =>{
  try{
    const mediciones = await M_Glucosa.find();
    if (!mediciones) {
      return res.json({
        status: 404,
        message: "No se encontró las mediciones de glucosa",
      });
    }     
    return res.json(
      {status: 200,
       message: "Se ha obtenido todas las mediciones registradas",
       data: mediciones}
     );
  } catch (error) {
    return res.json(
      {status: 500,
      message: "Se ha producido un ERROR al obtener las mediciones",
      }
      );
  }
}
export const obtenerMedicionesGlucosaPorPaciente = async(req, res) =>{
  try{
    const {id_paciente} = req.params;
    let mediciones_paciente = await M_Glucosa.find({id_paciente:id_paciente}).sort({creadoEn:-1});
    if (!mediciones_paciente) {
      return res.json({
        status: 404,
        message: "No se encontraron mediciones para este paciente",
      });
    }      
    return res.json(
      {status: 200,
       message: "Se ha obtenido las mediciones del paciente",
       data: mediciones_paciente}
     );
  } catch (error) {
      return res.json(
      {status: 500,
      message: "Se ha producido un ERROR al obtener las mediciones del paciente",
      }
      );
  }
}
export const EliminarMedicionGlucosa = async (req, res) =>{
  try {
    const{_id} =req.params;
    const medicion = await M_Glucosa.findById(_id);
    if(!medicion){
      return res.status(404).json({
        message: "No se encontro la medicion"
      });
    }
    await M_Glucosa.findByIdAndDelete(_id);
    res.status(200).json({
      status:200,
      message: "Eliminacion exitosa"
     });
  } catch (error) {
    
  }
}
