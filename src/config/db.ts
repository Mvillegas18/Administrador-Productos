import { Sequelize } from 'sequelize';

const db = new Sequelize(`${process.env.EXTERNAL_DB}`);

export default db;
