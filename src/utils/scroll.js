export const scrollToTop = (options = {}) => {
  const { smooth = true, delay = 100, top = 0 } = options

  const performScroll = () => {
    window.scrollTo({
      top: top,
      left: 0,
      behavior: smooth ? 'smooth' : 'instant',
    })
  }

  if (delay > 0) {
    setTimeout(performScroll, delay)
  } else {
    performScroll()
  }
}

export const scrollToElement = (elementId, options = {}) => {
  const { smooth = true, delay = 100, offset = 0 } = options

  const performScroll = () => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.offsetTop + offset
      window.scrollTo({
        top: elementPosition,
        left: 0,
        behavior: smooth ? 'smooth' : 'instant',
      })
    }
  }

  if (delay > 0) {
    setTimeout(performScroll, delay)
  } else {
    performScroll()
  }
}
