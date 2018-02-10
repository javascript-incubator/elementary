import { ServerStyleSheet } from 'styled-components'

function ServerStyles () {
  let sheet = new ServerStyleSheet()

  function getStyleTags (...x) {
    return sheet.getStyleTags(...x)
  }

  function collectStyles (...x) {
    return sheet.collectStyles(...x)
  }

  function getStyleElement (...x) {
    return sheet.getStyleElement(...x)
  }
  return { getStyleTags, collectStyles, getStyleElement }
}

export default ServerStyles
