chrome.downloads.onChanged.addListener(function(downloadDelta) {
  if (downloadDelta.state && downloadDelta.state.current === "complete") {
    chrome.downloads.search({id: downloadDelta.id}, function(downloadItems) {
      downloadItems.forEach(function(downloadItem) {
        chrome.downloads.erase({id: downloadItem.id});
      });
    });
  }
});
