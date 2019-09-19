import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  auth: { authSource: 'admin' },
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

for (const [server, path, auth] of routes) {
  app.use(path, auth);
  server.applyMiddleware({ app, path });
}

mongoose.connection.once('open', () => {
  app.listen({ port: 80 }, () => {
    console.log(`Apollo Server on http://localhost`);
  });
});
