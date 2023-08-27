window.btn_scroll.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

let isDisplay = false

setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true

    window.btn_scroll.style.display = 'flex'

    return null
  }

  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false

    window.btn_scroll.style.display = 'none'

    return null
  }
}, 500)
