import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
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
  app.listen({ port: 8080 }, () => {
    console.log(`Apollo Server on http://localhost:8080`);
  });
});
