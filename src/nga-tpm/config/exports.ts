const exports: Exports = {
  auth0: {
    domain: 'nga-tpm.eu.auth0.com',
    clientId: 'brF5x87G4r65QPS4okn6oIyQmqSKRwUh',
    audience: 'https://api.reach-info.org/',
    redirectUri: 'https://nga-tpm.reach-info.org',
  },
  apollo: {
    uri: 'https://api.reach-info.org/nga-tpm',
    files: 'https://files.reach-info.org/nga-tpm/',
  },
  site: {
    title: 'Nigeria Third Party Monitoring',
  },
  maps: [
    {
      title: 'Reference Atlas',
      description: 'Reference atlas showing location of key infrastructure.',
      img: 'map-1.png',
      url: 'https://nga-atlas.reach-info.org',
    },
  ],
};

export default exports;
