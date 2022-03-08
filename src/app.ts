import express from 'express';
import config from 'config';
import DbConnection from '../startUp/connectdb';
import logger from '../startUp/logger';
import routes from './Routes';
import deserializeUser from './middlewares/deserializeUser';

const app=express();
app.use(express.json());
app.use(deserializeUser);

const port=config.get<number>('port') || 3000;
app.listen(port,async () => {logger.info(`connect to port ${port}`);
await DbConnection();
routes(app);
});