import { gql } from 'apollo-server-express';

const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    listDocuments: [Document!]!
  }

  type Mutation {
    createDocument(
      file: String!
      title: String!
      documentType: DocumentTypes!
      fileType: FileTypes!
      clusters: [Clusters!]!
      organizations: [Organizations!]!
      donors: [Organizations!]!
      washTypes: [WashTypes!]!
      admin0: [Admin0!]!
      admin1: [Admin1!]!
      admin2: [Admin2!]!
    ): Document!
    updateDocument(
      id: ID!
      file: String!
      title: String!
      documentType: DocumentTypes!
      fileType: FileTypes!
      clusters: [Clusters!]!
      organizations: [Organizations!]!
      donors: [Organizations!]!
      washTypes: [WashTypes!]!
      admin0: [Admin0!]!
      admin1: [Admin1!]!
      admin2: [Admin2!]!
      status: Status!
    ): Document!
  }

  type Document {
    id: ID!
    file: String!
    title: String!
    documentType: DocumentTypes!
    fileType: FileTypes!
    clusters: [Clusters!]!
    organizations: [Organizations!]!
    donors: [Organizations!]!
    washTypes: [WashTypes!]!
    admin0: [Admin0!]!
    admin1: [Admin1!]!
    admin2: [Admin2!]!
    createdAt: Float!
    createdBy: String!
    updatedAt: Float!
    updatedBy: String!
    status: Status!
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

  enum Clusters {
    CCCM
    EDUCATION
    FSL
    HEALTH
    LOGISTICS
    NUTRITION
    PROTECTION
    SHELTER
  }

  enum DocumentTypes {
    MAP
    TERMS_OF_REFERENCE
    REPORT
    BASELINE
    ASSESSMENT
    FACTSHEET
    DATA
    ODK_TOOL
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
    AAR_JAPAN
    ACEM
    ACF_USA
    ACM
    ACROSS
    ACTED
    ADA
    ADCORD
    AID
    AMREF
    ARC
    ARC_IFRC
    ARD_AFRICA
    ASCDA
    ASCO
    ASHI
    ASIMO
    ASMP
    AWODA
    BEDN
    BMZ
    CAD
    CADA
    CADO
    CAFOD
    CAO
    CARD
    CARE
    CARITAS_CH
    CASS
    CCOSS
    CDEIP
    CDOR
    CEDS
    CEI
    CH
    CHIDDO
    CHO
    CLAC
    CMC
    CMD
    CONCERN
    CORDAID
    CRADA
    CRS
    DAYSTAR
    DORCAS
    DORD
    DRC
    DWS
    EAAD
    ECHO
    EDA
    EED
    FADA
    FH
    GAA
    GBI
    GFFO
    GLI
    GOAL
    GREDO
    HAA
    HACO
    HACT
    HCAWF
    HELP
    IAS
    ICCO
    IHO
    IM
    INTENT
    INTERSOS
    IOM
    IRC
    IRW
    JICA
    LCED
    LIVEWELL
    MACDA
    MC
    MCO
    MEDAIR
    MI
    MOPI_JONGLEI
    NCA
    NH
    NPA
    NRC
    NSDO
    NURTURE
    OSF
    OXFAM
    PACT
    PAH
    PCO
    PDI
    PLAN
    POH
    PSI
    PWJ
    RCO
    REACH
    RI
    RIPDO
    RUWASSA
    SAADO
    SALI
    SALT
    SC
    SCPD
    SDC
    SHAO
    SI
    SIDA
    SMC
    SNV
    SOH
    SP
    SPEDP
    SPOCI
    SSDO
    SSHF
    SSRCS
    SSUDA
    SSUWC
    SUFEM
    TDH
    TEARFUND
    TERM
    THESO
    TITIA
    TOP_RELIEF
    UMCOR
    UNHCR
    UNICEF
    UNIDOR
    UNIDO_SS
    UNKEA
    WECSS
    WFSS
    WHEEL
    WHH
    WR
    WVI
    WWOH
    ZOA
  }

  enum Status {
    DRAFT
    PUBLISHED
    DELETE
  }

  enum WashTypes {
    WATER
    SANITATION
    HYGIENE
  }
`;

export default typeDefs;
