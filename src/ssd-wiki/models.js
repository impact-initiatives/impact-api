import { Schema, model } from 'mongoose';

const documentSchema = new Schema({
  file: String,
  title: String,
  endDate: String,
  documentType: String,
  fileType: String,
  project: String,
  clusters: [String],
  audiences: [String],
  admin0: [String],
  admin1: [String],
  admin2: [String],
  createdAt: Number,
  createdBy: String,
  updatedAt: Number,
  updatedBy: String,
  status: String,
});

const homePageSchema = new Schema({
  markdown: String,
  updatedAt: Number,
  updatedBy: String,
});

const Document = model('ssdwiki.documents', documentSchema);
const HomePage = model('ssdwiki.homepages', homePageSchema);

export { Document, HomePage };
