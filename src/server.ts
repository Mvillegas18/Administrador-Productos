import colors from 'colors';
import express from 'express';
import db from './config/db';
import router from './router';

export const server = express();
server.use(express.json());
server.use('/api/products', router);

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

server.get('/api/', (req, res) => {
	res.json({ message: 'desde api' });
});

export default server;
