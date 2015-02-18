CloudFlare.define(
    'feedbackflap',
    ['feedbackflap/config'],
    function(config) {
      var FF = FF || [];
      FF.push(['_setAccount', config.token]);
      var url = 'http://feedbackflap.com/js/ff.js';
      CloudFlare.require([url]);
    }
);