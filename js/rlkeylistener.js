addEventListener('keydown', function (event) {
  try {
    if (event.key === 'ArrowRight') {
      document.querySelector('.next').click()
    }

    if (event.key === 'ArrowLeft') {
      document.querySelector('.prev').click()
    }
  } catch {}
})
