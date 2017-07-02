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
      setActiveBadge(true);
      setTimeout(function() {
        hostMap[host]();
      }, 1000);
    } else {
      setActiveBadge(false);
    }
  }

  /**
   * Sets the "active" badge overlay state.
   * @param {boolean} active Whether the exention is active or not.
   */
  function setActiveBadge(active) {
    var message = {
      active: active,
      type: 'badge'
    };

    chrome.runtime.sendMessage(message, function(response) {
      // Do nothing for now.
    });
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
