const myURLs = ["expireddomains.net/domains/"]

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status == "complete" &&
    myURLs.some((url) => tab.url.includes(url))
  ) {
    chrome.tabs.executeScript(
      tabId,
      { file: "js/rightclicklistener.js" },
      () => {}
    )
  }
})
