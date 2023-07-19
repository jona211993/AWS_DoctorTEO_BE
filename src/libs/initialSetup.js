import Role from "../models/m_roles";
export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "medico" }).save(),
      new Role({ name: "paciente" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
};
