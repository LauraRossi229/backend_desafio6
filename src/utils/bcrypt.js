import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

// Obtén el número de rondas desde la variable de entorno
const saltRounds = parseInt(process.env.SALT);

// Genera el "salt" utilizando el número de rondas especificado
const salt = bcrypt.genSaltSync(saltRounds);

export const createHash = (password) => bcrypt.hashSync(password, salt);

export const validatePassword = (passwordSend, passwordBDD) => bcrypt.compareSync(passwordSend, passwordBDD);
