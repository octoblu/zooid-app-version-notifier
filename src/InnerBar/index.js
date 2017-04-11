import React, {PropTypes} from 'react'

var propTypes = {
  autoRefresh: PropTypes.bool.isRequired,
  onClickRefresh: PropTypes.func.isRequired,
}

var defaultProps = {

}

export function InnerBar(props) {
  if (props.autoRefresh) {
    return (
      <div>
        This app has been updated! Refreshing Now...
      </div>
    )
  }

  return (
    <div>
      A new version is available!
      <a href="#" onClick={props.onClickRefresh}>Refresh</a>
    </div>
  )
}

InnerBar.propTypes    = propTypes
InnerBar.defaultProps = defaultProps

export default InnerBar
