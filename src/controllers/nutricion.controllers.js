import Dieta from '../models/m_nutricion';

export const registrarDieta = async (req, res) => {
  try {
    const {
        id_paciente,
        dia,
        desayuno,
        almuerzo,
        cena
        } = req.body;
    const newDieta = new Dieta({
      id_paciente,
      dia,
      desayuno,
      almuerzo,
      cena
    })
    const dietaSaved = await newDieta.save()

    return res.status(200).json({
        dietaSaved,
        message: "Se ha registrado la nueva dieta para el paciente",
    });
} catch (error) {
  console.log(error);
    return res.status(500).json({
        message: "Se ha generado un error al momento de registrar la nueva dieta",
    });
}

}
export const obtenerTodasLasDietas = async (req,res) => {
  try{
    const dietas = await Dieta.find();
    if (!dietas) {
      return res.status(404).json({
        status: 404,
        message: "No se encontró las dietas en la BD",
      });
    }     
    return res.status(200).json(
      {
       message: "Se ha obtenido todas las dietas registradas",
       data: dietas}
     );
  } catch (error) {
    return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener las dietas",
      }
      );
  }
}
export const obtenerDietaPaciente = async (req,res) => {
  try{
    const {id_paciente} = req.params;
    let dieta_paciente = await Dieta.find({id_paciente:id_paciente});
    if (!dieta_paciente) {
      return res.status(404).json({
        message: "No se encontraron una dieta para este paciente",
      });
    }      
    return res.status(200).json(
      {
       message: "Se ha obtenido la dieta del paciente",
       data: dieta_paciente}
     );
  } catch (error) {
      return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener la dieta del paciente",
      }
      );
  }
}

export const EliminarDieta = async (req, res) =>{
  try {
    const{_id} =req.params;
    const dieta = await Dieta.findById(_id);
    if(!dieta){
      return res.status(404).json({
        message: "No se encontro la dieta"
      });
    }
    await Dieta.findByIdAndDelete(_id);
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