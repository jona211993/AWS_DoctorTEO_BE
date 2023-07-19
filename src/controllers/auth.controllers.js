import User from "../models/m_usuario";
import Role from "../models/m_roles";
import jwt from "jsonwebtoken";
import config from "../config";
import Admin from "../models/m_admin";
import Paciente from "../models/m_paciente";
import Medico from "../models/m_medico";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    // comprobando si recibe el rol
    const RolEncontrado = await Role.find({ name: { $in: roles } });
    const rol = RolEncontrado[0].name;
    console.log(rol);
    let user;    
    switch (rol) {
      case "admin":
        user = new Admin({
          username,
          email,
          password: await User.encryptPassword(password),
          estado: "habilitado",
          roles: [RolEncontrado[0]._id],
          nombre: req.body.nombre,
          apellidoPaterno: req.body.apellidoPaterno,
          apellidoMaterno: req.body.apellidoMaterno,
          dni: req.body.dni,          
          celular: req.body.celular,
          direccion: req.body.direccion,
          imagenURL: req.body.imagenURL,
        });
        break;
      case "medico":
        user = new Medico({
          username,
          email,
          password: await User.encryptPassword(password),
          estado: "habilitado",
          roles: [RolEncontrado[0]._id],
          nombre: req.body.nombre,
          apellidoPaterno: req.body.apellidoPaterno,
          apellidoMaterno: req.body.apellidoMaterno,
          dni: req.body.dni,
          especialidad: req.body.especialidad,
          celular: req.body.celular,
          direccion: req.body.direccion,
          imagenURL: req.body.imagenURL,
        });
        break;
      case "paciente":
        user = new Paciente({
          username,
          email,
          password: await User.encryptPassword(password),
          estado: "habilitado",
          roles: [RolEncontrado[0]._id],
          nombre: req.body.nombre,
          apellidoPaterno: req.body.apellidoPaterno,
          apellidoMaterno: req.body.apellidoMaterno,
          dni: req.body.dni,
          edad: req.body.edad,
          celular: req.body.celular,
          tipoSangre: req.body.tipoSangre,
          imagenURL: req.body.imagenURL,
        });
        break;
      default:
        return res.status(400).json({ error: "Tipo de usuario inválido" });
    }

    const usuarioGuardado = await user.save();

    const token = jwt.sign({ id: usuarioGuardado._id }, config.SECRET, {
      expiresIn: 86400, // 24 horas
    });

    res.status(200).json({
      message: "Usuario registrado exitosamente",
      token,
      rol,
      usuarioGuardado,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Se produjo un error al registrar usuario",
    });
  }
};
export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });
  if (userFound.estado == "inhabilitado")
    return res.status(403).json({ message: "Usuario no encontrado - i" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res
      .status(401)
      .json({ token: null, message: "Contraseña invalida" });

  const roles = await Role.find({ _id: { $in: userFound.roles } });

  let rol = "";

  try {
    rol = roles[0].name;
  } catch (error) {
    return res.json({
      message: "No se encontro rol",
    });
  }

  const token = jwt.sign(
    {
      id: userFound._id,
      username: userFound.username,
      nombre:userFound.nombre,
      apellidoPaterno:userFound.apellidoPaterno,
      apellidoMaterno:userFound.apellidoMaterno,
      edad:userFound.edad,
      celular:userFound.celular,
      tipoSangre:userFound.tipoSangre,
      imagenURL:userFound.imagenURL,
      email:userFound.email,      
      rol: rol,
      creadoEn: userFound.creadoEn,

    },
    config.SECRET,
    {
      expiresIn: 86400,
    }
  );

  res.json({ token });
};
