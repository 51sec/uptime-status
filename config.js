// Configuration
window.Config = {

  // Site Name
  SiteName: 'Store Status',

  // Site URL
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // Support both Monitor-Specific and  Read-Only type's Api Key
  ApiKeys: [
    'm788934509-1804cdad1bfbd9039db9d74d',
  ],

  // if shows monitored site's URL
  ShowLink: true,

  // Show how many days of log. 
  // API can have 90 days, although free plan says only for 60 days.
  // 60 is a good number for log days. 
  CountDays: 90,

  // Navigation menu at top right. 
  Navi: [
    {
      text: 'Store',
      url: 'https://dexo.store'
    },
    {
      text: 'Home',
      url: 'https://dexo.store/'
    }
  ]
};
