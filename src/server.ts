import colors from 'colors';
import express from 'express';
import db from './config/db';

const server = express();

const connectDB = async () => {
	try {
		await db.authenticate();
		db.sync();
		console.log(colors.blue.bold('La conexion a sido exitosa!!'));
	} catch (error) {
		// console.log(error);

		console.log(colors.red.bold('Hubo un error al conectar a la DB'));
	}
};

connectDB();

export default server;
