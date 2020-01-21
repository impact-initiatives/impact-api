import { AuthenticationError } from 'apollo-server-express';

import { Document, HomePage } from './models';

const resolvers = {
  Query: {
    listDocuments: async (_, __, ctx) => {
      const user = await ctx.user;
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      if (!ctx.permissions.includes('admin')) {
        return Document.find({
          $or: [{ status: 'PUBLISHED' }, { createdBy: user.email }],
        });
      }
      return Document.find();
    },
    getHomePage: async (_, __, ctx) => {
      const user = await ctx.user;
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      return HomePage.findOne();
    },
  },
  Mutation: {
    createDocument: async (_, args, ctx) => {
      const user = await ctx.user;
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      const newDocument = new Document({
        file: args.file,
        title: args.title,
        endDate: args.endDate,
        documentType: args.documentType,
        fileType: args.fileType,
        project: args.project,
        clusters: args.clusters,
        audiences: args.audiences,
        admin0: args.admin0,
        admin1: args.admin1,
        admin2: args.admin2,
        createdAt: Date.now(),
        createdBy: user.email,
        updatedAt: Date.now(),
        updatedBy: user.email,
        status: 'DRAFT',
      });
      return newDocument.save();
    },
    updateDocument: async (_, args, ctx) => {
      const user = await ctx.user;
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      const document = await Document.findById(args.id);
      if (
        user.email !== document.createdBy &&
        !ctx.permissions.includes('admin')
      ) {
        throw new AuthenticationError(
          'You can only edit documents created by yourself',
        );
      }
      document.file = args.file;
      document.title = args.title;
      document.endDate = args.endDate;
      document.documentType = args.documentType;
      document.fileType = args.fileType;
      document.project = args.project;
      document.clusters = args.clusters;
      document.audiences = args.audiences;
      document.admin0 = args.admin0;
      document.admin1 = args.admin1;
      document.admin2 = args.admin2;
      document.updatedAt = Date.now();
      document.updatedBy = user.email;
      if (ctx.permissions.includes('admin')) document.status = args.status;
      return document.save();
    },
    updateHomePage: async (_, args, ctx) => {
      const user = await ctx.user;
      if (!user) {
        throw new AuthenticationError('You must be logged in to do this');
      }
      if (!ctx.permissions.includes('admin')) {
        throw new AuthenticationError('You must be an admin to do this');
      }
      const homePage = await HomePage.findOne();
      homePage.markdown = args.markdown;
      homePage.updatedAt = Date.now();
      homePage.updatedBy = user.email;
      return homePage.save();
    },
  },
};

export default resolvers;
