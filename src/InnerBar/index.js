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
        <p>This app has been updated! Refreshing Now...</p>
      </div>
    )
  }

  return (
    <div>
      <span>A new version is available!</span>
      <a href="#" onClick={props.onClickRefresh}>Refresh</a>
    </div>
  )
}

InnerBar.propTypes    = propTypes
InnerBar.defaultProps = defaultProps

export default InnerBar
