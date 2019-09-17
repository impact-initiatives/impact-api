import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import morgan from 'morgan';

import server1 from './server-1';

const app = express();
const httpServer = http.createServer(app);

const applyMiddleware = (server, path) => {
  server.applyMiddleware({ app, path });
  server.installSubscriptionHandlers(httpServer);
};

const connectDb = () =>
  mongoose.connect(process.env.DATABASE_URL, {
    auth: { authSource: 'admin' },
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

app.use(cors());
app.use(morgan('dev'));

applyMiddleware(server1, '/server-1');

connectDb().then(() => {
  httpServer.listen({ port: 4000 }, () => {
    console.log(`Apollo Server on http://localhost:4000`);
  });
});
