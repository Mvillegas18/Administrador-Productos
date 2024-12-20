import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import db from './config/db';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';
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

//Permitir conexiones de origen cruzado (cors)
const corsOptions: CorsOptions = {
	origin: (origin, callback) => {
		if (origin === process.env.FRONTEND_URL) {
			callback(null, true);
		} else {
			callback(new Error('Error de cors'));
		}
	},
};
server.use(cors(corsOptions));
server.use(express.json());
server.use('/api/products', router);

// Docs

server.use('/docs', serve, setup(swaggerSpec, swaggerUiOptions));

export default server;
