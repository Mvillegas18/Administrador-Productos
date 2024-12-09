import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize(`${process.env.EXTERNAL_DB}`, {
	models: [__dirname + '/../models/**/*.ts'],
});

export default db;
