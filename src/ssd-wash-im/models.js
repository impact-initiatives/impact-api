import { Schema, model } from 'mongoose';

const documentSchema = new Schema({
  file: String,
  title: String,
  documentType: String,
  fileType: String,
  clusters: [String],
  organizations: [String],
  donors: [String],
  washTypes: [String],
  admin0: [String],
  admin1: [String],
  admin2: [String],
  createdAt: Number,
  createdBy: String,
  updatedAt: Number,
  updatedBy: String,
  status: String,
});

const Document = model('ssdwashim.documents', documentSchema);

export { Document };
