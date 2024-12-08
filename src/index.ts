import 'dotenv/config';
import server from './server';

const PORT = process.env.PORT;
server.listen(3000, () => {
	console.log(`Escuchando desde el puerto http://localhost:${PORT}`);
});
