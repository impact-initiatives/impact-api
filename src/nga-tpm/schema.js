import { gql } from 'apollo-server-express';

const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    listDocuments: [Document!]!
    getHomePage: HomePage!
  }

  type Mutation {
    createDocument(
      file: String!
      title: String!
      endDate: String!
      documentType: DocumentTypes!
      fileType: FileTypes!
      clusters: [Clusters!]!
      organizations: [Organizations!]!
      admin0: [Admin0!]!
      admin1: [Admin1!]!
      admin2: [Admin2!]!
    ): Document!
    updateDocument(
      id: ID!
      file: String!
      title: String!
      endDate: String!
      documentType: DocumentTypes!
      fileType: FileTypes!
      clusters: [Clusters!]!
      organizations: [Organizations!]!
      admin0: [Admin0!]!
      admin1: [Admin1!]!
      admin2: [Admin2!]!
      status: Status!
    ): Document!
    updateHomePage(markdown: String!): HomePage!
  }

  type Document {
    id: ID!
    file: String!
    title: String!
    endDate: String!
    documentType: DocumentTypes!
    fileType: FileTypes!
    clusters: [Clusters!]!
    organizations: [Organizations!]!
    admin0: [Admin0!]!
    admin1: [Admin1!]!
    admin2: [Admin2!]!
    createdAt: Float!
    createdBy: String!
    updatedAt: Float!
    updatedBy: String!
    status: Status!
  }

  type HomePage {
    id: ID!
    markdown: String!
    updatedAt: Float!
    updatedBy: String!
  }

  enum Admin0 {
    NG
  }

  enum Admin1 {
    NG002
    NG008
    NG036
  }

  enum Admin2 {
    NG002001
    NG002002
    NG002003
    NG002004
    NG002005
    NG002006
    NG002007
    NG002008
    NG002009
    NG002010
    NG002011
    NG002012
    NG002013
    NG002014
    NG002015
    NG002016
    NG002017
    NG002018
    NG002019
    NG002020
    NG002021
    NG008001
    NG008002
    NG008003
    NG008004
    NG008005
    NG008006
    NG008007
    NG008008
    NG008009
    NG008010
    NG008011
    NG008012
    NG008013
    NG008014
    NG008015
    NG008016
    NG008017
    NG008018
    NG008019
    NG008020
    NG008021
    NG008022
    NG008023
    NG008024
    NG008025
    NG008026
    NG008027
    NG036001
    NG036002
    NG036003
    NG036004
    NG036005
    NG036006
    NG036007
    NG036008
    NG036009
    NG036010
    NG036011
    NG036012
    NG036013
    NG036014
    NG036015
    NG036016
    NG036017
  }

  enum Clusters {
    EDUCATION
    FSL
    NUTRITION
    PROTECTION
  }

  enum DocumentTypes {
    TERMS_OF_REFERENCE
    FACTSHEET
    FLASH
    DEEP_DIVE
    PARTNER
    THEMATIC
    MAP
  }

  enum FileTypes {
    PDF
    DOCX
    XLSX
    PPTX
    CSV
    ZIP
  }

  enum Organizations {
    IMPACT
    GIRL_EFFECT
    GROUND_TRUTH
    WFP
    UNICEF
    ACF
    IRC
    DRC
    NRC
  }

  enum Status {
    DRAFT
    PUBLISHED
    DELETE
  }
`;

export default typeDefs;
