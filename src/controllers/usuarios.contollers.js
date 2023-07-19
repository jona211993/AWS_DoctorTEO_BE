import User from '../models/m_usuario';

export const obtenerUsuarios = async (req,res) => {
  try{
    const usuarios = await User.find();
    if (!usuarios) {
      return res.status(404).json({
        status: 404,
        message: "No se encontró los usuarios",
      });
    }     
    return res.status(200).json(
      {
       message: "Se ha obtenido todas los usuarios",
       data: usuarios}
     );
  } catch (error) {
    return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener los usuarios",
      }
      );
  }
}
export const obtenerUsuarioPorId = async (req,res) => {
  try{
    const {id_paciente} = req.params;
    let usuario = await User.find({_id:id_paciente});
    if (!usuario) {
      return res.status(404).json({
        message: "No se encontraron al usuario",
      });
    }      
    return res.status(200).json(
      {
       message: "Se ha obtenido el usuario",
       data: usuario}
     );
  } catch (error) {
      return res.status(500).json(
      {
      message: "Se ha producido un ERROR al obtener el usuario",
      }
      );
  }
}

