import React from 'react'
import PropTypes from 'prop-types'

export const SubmitButton = ( { children, disabled, onClick } ) => {
	return <button disabled={disabled} onClick={onClick}>{children}</button>
}

SubmitButton.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
}