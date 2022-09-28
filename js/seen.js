let domainElements = document.querySelectorAll('.field_domain')
let domains = [...domainElements].map((element) => {
  return element.querySelector('a').textContent
})

chrome.storage.local.get(domains, function (stored) {
  stored = { ...stored }

  let storedDomains = Object.keys(stored).map((domain) => domain)

  domainElements.forEach((element) => {
    const content = element.querySelector('a').textContent
    if (!storedDomains.includes(content)) {
      stored[content] = new Date()
      // NEW
      element.children[0].style.color = 'blue'
    } else {
      // SEEN
      element.children[0].style.color = 'red'
    }
  })

  chrome.storage.local.set(stored, function () {})
})
