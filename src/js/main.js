(function($) {

  var hostMap = {
    'www.washingtonpost.com': washingtonPost
  };

  /**
   * Initialize the extension for the target host.
   */
  function initializeExtension() {
    var host = window.location.host;

    if (hostMap[host]) {
      setTimeout(function() {
        hostMap[host]();
      }, 1000);
    }
  }

  /**
   * Washington Post page mods.
   */
  function washingtonPost() {
    $('html').removeClass('drawbridge-up');
  }

  /**
   * Initialize the extension.
   */
  $(document).ready(function() {
    initializeExtension();
  });

})(jQuery);
