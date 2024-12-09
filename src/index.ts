import 'dotenv/config';

import colors from 'colors';
import router from './router';
import server from './server';

server.use('/api/products', router);

const PORT = process.env.PORT ?? 3000;
server.listen(3000, () => {
	console.log(
		colors.green.bold(`Escuchando desde el puerto http://localhost:${PORT}`)
	);
});
