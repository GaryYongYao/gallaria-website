const page = () => window.innerHeight

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
