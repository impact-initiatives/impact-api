import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import morgan from 'morgan';

import routes from './routes';

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(morgan('dev'));

mongoose.connect(process.env.DATABASE_URL, {
  auth: { authSource: 'admin' },
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

for (const [server, path] of routes) {
  server.applyMiddleware({ app, path });
  server.installSubscriptionHandlers(httpServer);
}

mongoose.connection.once('open', () => {
  httpServer.listen({ port: 4000 }, () => {
    console.log(`Apollo Server on http://localhost:4000`);
  });
});
