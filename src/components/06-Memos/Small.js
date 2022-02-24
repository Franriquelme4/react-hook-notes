import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Small = memo(({value}) => {
    console.log('Me volvi a llamar ');
  return (
    <small>{value}</small>
  )
}
)
export default Small