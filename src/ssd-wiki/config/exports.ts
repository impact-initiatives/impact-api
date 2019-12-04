const exports: Exports = {
  auth0: {
    domain: 'ssd-wiki.eu.auth0.com',
    clientId: '9zqOxdxQE2eOIbobyrj1OthAqGJdrdNN',
    audience: 'https://api.reach-info.org/',
    redirectUri: 'https://ssd-wiki.reach-info.org',
  },
  apollo: {
    uri: 'https://api.reach-info.org/ssd-wiki',
    files: null,
  },
  site: {
    title: 'REACH SSD Internal Wiki',
  },
  maps: [
    {
      title: 'Reference Atlas',
      description: 'Reference atlas showing location of key infrastructure.',
      img: 'map-1.png',
      url: 'https://ssd-atlas.fieldmaps.io',
    },
  ],
};

export default exports;
