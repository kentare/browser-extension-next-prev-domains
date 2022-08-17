const myURLs = ["expireddomains.net/domains/"]

console.log("hey")
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("hey2")
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
