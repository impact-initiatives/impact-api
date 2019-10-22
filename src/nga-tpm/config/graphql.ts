import gql from 'graphql-tag';

export const GET_HOME_PAGE = gql`
  query getHomePage {
    getHomePage {
      markdown
    }
  }
`;

export const LIST_DOCUMENTS = gql`
  query listDocuments {
    listDocuments {
      id
      file
      title
      documentType
      fileType
      clusters
      organizations
      admin0
      admin1
      admin2
      createdAt
      createdBy
      updatedAt
      updatedBy
      status
    }
  }
`;

export const CREATE_DOCUMENT = gql`
  mutation createDocument(
    $file: String!
    $title: String!
    $documentType: DocumentTypes!
    $fileType: FileTypes!
    $clusters: [Clusters!]!
    $organizations: [Organizations!]!
    $admin0: [Admin0!]!
    $admin1: [Admin1!]!
    $admin2: [Admin2!]!
  ) {
    createDocument(
      file: $file
      title: $title
      documentType: $documentType
      fileType: $fileType
      clusters: $clusters
      organizations: $organizations
      admin0: $admin0
      admin1: $admin1
      admin2: $admin2
    ) {
      id
      file
      title
      documentType
      fileType
      clusters
      organizations
      admin0
      admin1
      admin2
      createdAt
      createdBy
      updatedAt
      updatedBy
      status
    }
  }
`;

export const UPDATE_DOCUMENT = gql`
  mutation updateDocument(
    $id: ID!
    $file: String!
    $title: String!
    $documentType: DocumentTypes!
    $fileType: FileTypes!
    $clusters: [Clusters!]!
    $organizations: [Organizations!]!
    $admin0: [Admin0!]!
    $admin1: [Admin1!]!
    $admin2: [Admin2!]!
    $status: Status!
  ) {
    updateDocument(
      id: $id
      file: $file
      title: $title
      documentType: $documentType
      fileType: $fileType
      clusters: $clusters
      organizations: $organizations
      admin0: $admin0
      admin1: $admin1
      admin2: $admin2
      status: $status
    ) {
      id
      file
      title
      documentType
      fileType
      clusters
      organizations
      admin0
      admin1
      admin2
      createdAt
      createdBy
      updatedAt
      updatedBy
      status
    }
  }
`;

export const UPDATE_HOME_PAGE = gql`
  mutation updateHomePage($markdown: String!) {
    updateHomePage(markdown: $markdown) {
      markdown
    }
  }
`;
