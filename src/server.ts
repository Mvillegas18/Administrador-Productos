import express from 'express';
import colors from 'colors';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';
import db from './config/db';
import router from './router';

const connectDB = async () => {
	try {
		await db.authenticate();
		db.sync();
		// console.log(colors.blue.bold('La conexion a sido exitosa!!'));
	} catch (error) {
		console.log(colors.red.bold('Hubo un error al conectar a la DB'));
	}
};

connectDB();

const server = express();
server.use(express.json());
server.use('/api/products', router);

// Docs

server.use('/docs', serve, setup(swaggerSpec, swaggerUiOptions));

export default server;
