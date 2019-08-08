import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import express from 'express';
import mongoose from 'mongoose';

import createUsersWithMessages, { models } from './test';
import server1 from './server-1';

const app = express();

app.use(cors());
app.use(morgan('dev'));

const httpServer = http.createServer(app);

server1.applyMiddleware({ app, path: '/server-1' });
server1.installSubscriptionHandlers(httpServer);

const isTest = !!process.env.TEST_DATABASE_URL;
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8000;

const connectDb = () => {
  if (process.env.TEST_DATABASE_URL) {
    return mongoose.connect(process.env.TEST_DATABASE_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
  }
  if (process.env.DATABASE_URL) {
    return mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
  }
};

connectDb().then(async () => {
  if (isTest || isProduction) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
    createUsersWithMessages(new Date());
  }
  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}`);
  });
});
