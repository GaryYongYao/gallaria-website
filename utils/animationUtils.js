const page = () => window.innerHeight - 200

export const showFromBottom = (id, classes = '') => {
  const ele = document.getElementById(id)

  if (ele) {
    if (ele.getBoundingClientRect().top < page()) {
      ele.className = classes + ' show-from-y'
    } else {
      ele.className = classes
    }
  }
}

export const showHeader = (id, classes = '') => {
  const ele = document.getElementById(id)

  if (ele) {
    if (ele.getBoundingClientRect().top < window.innerHeight / 100 ) {
      ele.className = classes + ' show-from-y'
    } else {
      ele.className = classes
    }
  }
}

export const showDevice = (id, classes = '') => {
  const ele = document.getElementById(id)

  if (ele) {
    if (ele.getBoundingClientRect().top < page()) {
      ele.className = classes + ' show-display-device'
    } else {
      ele.className = classes
    }
  }
}

export const showMessage = (id, classes = '') => {
  const ele = document.getElementById(id)

  if (ele) {
    if (ele.getBoundingClientRect().top < page()) {
      ele.className = classes + ' show-display-message'
    } else {
      ele.className = classes
    }
  }
}
