import 'dotenv/config';
import router from './router';
import server from './server';

server.use('/api/products', router);

const PORT = process.env.PORT;
server.listen(3000, () => {
	console.log(`Escuchando desde el puerto http://localhost:${PORT}`);
});
