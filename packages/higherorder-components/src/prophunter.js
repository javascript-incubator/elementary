import React from 'react'

const propHunter = (blacklist = []) => Com => {
  const clean = huntProps(blacklist)
  const PropHunterElement = props => <Com {...clean(props)} />
  PropHunterElement.displayName = 'PropHunterElement'
  return PropHunterElement
}

export const huntProps = blacklist => props => {
  const next = {}
  for (let key in props) {
    if (blacklist.includes(key)) continue
    next[key] = props[key]
  }
  return next
}

export default propHunter
