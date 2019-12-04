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
      project: Projects!
      clusters: [Clusters!]!
      audiences: [Audiences!]!
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
      project: Projects!
      clusters: [Clusters!]!
      audiences: [Audiences!]!
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
    project: Projects!
    clusters: [Clusters!]!
    audiences: [Audiences!]!
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
    SS
  }

  enum Admin1 {
    SS01
    SS02
    SS03
    SS04
    SS05
    SS06
    SS07
    SS08
    SS09
    SS10
  }

  enum Admin2 {
    SS0101
    SS0102
    SS0103
    SS0104
    SS0105
    SS0106
    SS0201
    SS0202
    SS0203
    SS0204
    SS0205
    SS0206
    SS0207
    SS0208
    SS0301
    SS0302
    SS0303
    SS0304
    SS0305
    SS0306
    SS0307
    SS0308
    SS0309
    SS0310
    SS0311
    SS0401
    SS0402
    SS0403
    SS0404
    SS0405
    SS0406
    SS0407
    SS0408
    SS0501
    SS0502
    SS0503
    SS0504
    SS0505
    SS0601
    SS0602
    SS0603
    SS0604
    SS0605
    SS0606
    SS0607
    SS0608
    SS0609
    SS0701
    SS0702
    SS0703
    SS0704
    SS0705
    SS0706
    SS0707
    SS0708
    SS0709
    SS0710
    SS0711
    SS0712
    SS0801
    SS0802
    SS0803
    SS0804
    SS0805
    SS0806
    SS0901
    SS0902
    SS0903
    SS1001
    SS1002
    SS1003
    SS1004
    SS1005
    SS1006
    SS1007
    SS1008
    SS1009
    SS1010
  }

  enum Audiences {
    FIELD_OFFICER
    ADMIN_OFFICER
    ASSESSMENT_OFFICER
    GIS_OFFICER
    HQ_GENEVA
  }

  enum Clusters {
    CCCM
    EDUCATION
    FSL
    HEALTH
    LOGISTICS
    MARKET
    NUTRITION
    PROTECTION
    SHELTER
  }

  enum DocumentTypes {
    MAP
    TERMS_OF_REFERENCE
    REPORT
    ASSESSMENT
    FACTSHEET
    DATA
    ODK_TOOL
    ADMIN
  }

  enum FileTypes {
    PDF
    DOCX
    XLSX
    PPTX
    CSV
    ZIP
  }

  enum Projects {
    ADMIN
    AOK
    PRM
    REFUGEE
    RAPID
    SECTOR
    AAP
  }

  enum Status {
    DRAFT
    PUBLISHED
    DELETE
  }
`;

export default typeDefs;
