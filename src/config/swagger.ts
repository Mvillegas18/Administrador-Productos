import swaggerJSDoc from 'swagger-jsdoc';
import { SwaggerUiOptions } from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
	swaggerDefinition: {
		openapi: '3.0.2',
		tags: [
			{ name: 'Products', description: 'API operations related to products' },
		],
		info: {
			title: 'REST API Node.js / Express / Typescript',
			version: '1.0.0',
			description: 'API Docs for Products',
		},
	},
	apis: ['./src/router.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerUiOptions: SwaggerUiOptions = {
	customCss: `
		.topbar-wrapper .link {
			content: url('https://avatars.githubusercontent.com/u/108032325?v=4');
			height: 180px;
			width: auto,
		}
	`,
	customSiteTitle: 'Documentation REST API Express / Typescript',
};

export default swaggerSpec;
