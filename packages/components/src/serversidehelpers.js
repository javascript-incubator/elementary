import { ServerStyleSheet } from 'styled-components'

function ServerStyles () {
  let sheet = new ServerStyleSheet()

  function getStyleTags () {
    return sheet.getStyleTags()
  }

  function collectStyles () {
    return sheet.collectStyles()
  }

  function getStyleElements () {
    return sheet.getStyleElements()
  }
  return { getStyleTags, collectStyles, getStyleElements }
}

export default ServerStyles
