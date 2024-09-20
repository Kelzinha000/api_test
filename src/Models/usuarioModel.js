import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const usuario = conn.define(
"usuarios",
{
    nome:{
    type: DataTypes.STRING, 
    allowNull: false
    }, 
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    passworld: {
    type: DataTypes.STRING,
    allowNull: false,
    },
},
{
    tableName: "usuarios",
}
);

export default usuario; 