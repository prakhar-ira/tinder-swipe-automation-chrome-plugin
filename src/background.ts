chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
      chrome.pageAction.show(id);
      console.log('hi');
    });
  }, { url: [{ urlMatches: 'tinder.com' }] });
});
