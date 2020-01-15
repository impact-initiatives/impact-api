const exports: Exports = {
  auth0: {
    domain: 'nga-tpm.eu.auth0.com',
    clientId: '5Xhn1O1JutZQtxZvyIkM9qx4w1tSsE1Y',
    audience: 'https://api.reach-info.org/',
    redirectUri: 'https://nga-tpm.reach-info.org',
  },
  apollo: {
    uri: 'https://api.reach-info.org/nga-tpm',
    files: null,
  },
  site: {
    title: 'NENTAD Third Party Monitoring Consortium',
  },
  maps: [
    {
      title: 'All TPM Data',
      description: 'Complete Light Touch Monitoring Dataset.',
      img: 'dfid.png',
      url:
        'https://public.tableau.com/views/IMPACT_Light_Touch_Monitoring/LTMDashboard?:showVizHome=no',
    },
    {
      title: 'IRC TPM Data',
      description: 'LTM Dashboard for IRC data only.',
      img: 'irc.png',
      url:
        'https://public.tableau.com/views/IMPACT_Light_Touch_Monitoring_IRC/LTMDashboard?:showVizHome=no',
    },
    {
      title: 'UNICEF TPM Data',
      description: 'LTM Dashboard for UNICEF data only.',
      img: 'unicef.png',
      url:
        'https://public.tableau.com/views/IMPACT_Light_Touch_Monitoring_UNICEF/LTMDashboard?:showVizHome=no',
    },
    {
      title: 'WFP TPM Data',
      description: 'LTM Dashboard for WFP data only.',
      img: 'wfp.png',
      url:
        'https://public.tableau.com/views/IMPACT_Light_Touch_Monitoring_WFP/LTMDashboard?:showVizHome=no',
    },
    {
      title: 'Reference Atlas',
      description: 'Reference atlas showing location of key infrastructure.',
      img: 'map-1.png',
      url: 'https://nga-atlas.fieldmaps.io',
    },
  ],
};

export default exports;
