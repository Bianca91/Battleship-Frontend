import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ErrorMessage.css'

export class ErrorMessage extends PureComponent {
  static propTypes = {
    errorText: PropTypes.string
  }

  render() {
    return (
      <h5 className="Error">{this.props.errorText}</h5>
    )
  }
}

export default ErrorMessage
