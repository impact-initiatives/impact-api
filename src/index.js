import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { tmpdir } from 'os';
import compression from 'compression';

import routes from './routes';
import { getFile, putFile } from './files';

const app = express();
const upload = multer({ dest: tmpdir() }).single('file');

app.use(cors());
app.options('*', cors());
app.use(compression({ level: 9, memLevel: 9 }));

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

for (const [server, path, auth] of routes) {
  const encrypted = ['--encrypt', '-e'].includes(auth.mode);
  app.use(path, auth.graphql);
  server.applyMiddleware({ app, path });
  app.use(path + '-files', auth.files);
  if (encrypted) app.get(path + '-files', getFile(path));
  app.post(path + '-files', upload, putFile(path, auth.mode));
}

mongoose.connection.once('open', () => {
  app.listen({ port: 80 }, () => {
    console.log('Apollo Server on http://localhost/');
  });
});
