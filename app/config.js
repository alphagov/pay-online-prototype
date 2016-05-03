// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

  // Service name used in header. Eg: 'Renew your passport'
  serviceName: {
  	main : "Pay online for offline services",
  	roomRent : "Pay for hiring a government venue",
  	embassyFees : "Pay for a British Embassy service"
  },


  // Default port that prototype runs on
  port: '4444',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#" title="Find out more about cookies">Find out more about cookies</a>'

};
	