let domainElements = document.querySelectorAll('.field_domain')
let domains = [...domainElements].map((element) => element.textContent)

chrome.storage.sync.get(domains, function (stored) {
  stored = { ...stored }

  let storedDomains = Object.keys(stored).map((domain) => domain)

  domainElements.forEach((element) => {
    if (!storedDomains.includes(element.textContent)) {
      stored[element.textContent] = new Date()
      // NEW
      element.children[0].style.color = 'red'
    } else {
      // SEEN
      element.children[0].style.color = 'blue'
    }
  })

  chrome.storage.sync.set(stored, function () {})
})
