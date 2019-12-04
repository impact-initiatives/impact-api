const exports: Exports = {
  auth0: {
    domain: 'ssd-wash-im.eu.auth0.com',
    clientId: 'brF5x87G4r65QPS4okn6oIyQmqSKRwUh',
    audience: 'https://api.reach-info.org/',
    redirectUri: 'https://ssd-wash-im.reach-info.org',
  },
  apollo: {
    uri: 'https://api.reach-info.org/ssd-wash-im',
    files: 'https://files.reach-info.org/ssd-wash-im/',
  },
  site: {
    title: 'South Sudan WASH Information Management System',
  },
  maps: [
    {
      title: 'Country Baseline',
      description:
        'Household level assessmeent conducted bi-annually across all of South Sudan.',
      img: 'map-1.png',
      url:
        'https://public.tableau.com/views/SSD_WASH_Analysis-MapRed-26092019/MapRed?:showVizHome=no',
    },
    {
      title: 'Area of Knowledge',
      description:
        'Settlement level assessment conducted monthly in most areas in South Sudan.',
      img: 'map-2.png',
      url:
        'https://public.tableau.com/views/REACH_SSD_AoK_WASH/Dashboard1?:showVizHome=no',
    },
    {
      title: 'Reference Atlas',
      description: 'Reference atlas showing location of key infrastructure.',
      img: 'map-3.png',
      url: 'https://ssd-atlas.fieldmaps.io',
    },
  ],
};

export default exports;
