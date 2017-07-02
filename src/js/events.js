(function() {

  var actionMap = {
    badge: updateBadge
  };

  /**
   * Handle messages from the content script.
   * @param  {object}    request      The request object.
   * @param  {object}    sender       The sender object.
   * @param  {function}  sendResponse The response callback function.
   * @return {undefined}
   */
  function messageHandler(request, sender, sendResponse) {
    if (actionMap[request.type]) {
      actionMap[request.type](request);
    }
    sendResponse({farewell: "goodbye"});
  }

  /**
   * Updates the badge overlay text.
   * @param  {object}    request The update request object.
   * @return {undefined}
   */
  function updateBadge(request) {
    if (request.active) {
      chrome.browserAction.setBadgeText({text: '✓'});
    } else {
      chrome.browserAction.setBadgeText({text: ''});
    }
  }

  chrome.runtime.onMessage.addListener(messageHandler);
})();