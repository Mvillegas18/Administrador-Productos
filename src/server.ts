import express from 'express';
import db from './config/db';

const server = express();

const connectDB = async () => {
	try {
		await db.authenticate();
		db.sync();
		console.log('La conexion a sido exitosa!!');
	} catch (error) {
		console.log(error);
		console.log('Hubo un error al conectar a la DB');
	}
};

connectDB();

export default server;
