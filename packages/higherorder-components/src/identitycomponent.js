import React from 'react'
import PT from 'prop-types'

const IdentityComponent = ({ F, ...props }) => <F {...props} />

IdentityComponent.displayName = 'IdentityComponent'

IdentityComponent.propTypes = {
  F: PT.func
}

export default IdentityComponent
