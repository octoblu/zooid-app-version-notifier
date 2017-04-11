import React, { PropTypes } from 'react'

import {checkVersion} from '../helpers'
import Bar from '../Bar'
import InnerBar from '../InnerBar'

class AppVersionNotifier extends React.Component {
  static propTypes = {
    autoRefresh: PropTypes.bool,
    checkVersion: PropTypes.func,
    initialVersion: PropTypes.string.isRequired,
    interval: PropTypes.number,
  }

  static defaultProps = {
    autoRefresh: false,
    interval: 60 * 1000,
    checkVersion: checkVersion,
  }

  state = {
    versionChanged: false,
  }

  componentDidMount() {
    this._checkInterval = setInterval(this._pollVersion, this.props.interval)
    this._pollVersion()
  }

  componentWillUnMount() {
    clearInterval(this._checkInterval)
  }

  _pollVersion = () => {
    const {checkVersion, initialVersion} = this.props

    checkVersion((error, version) => {
      if (error) return

      if (initialVersion !== version) {
        this.setState({versionChanged: true})
      }
    })
  }

  refresh = () => {
    location.reload(true)
  }

  render() {
    const {autoRefresh} = this.props
    const {versionChanged} = this.state

    if (autoRefresh && versionChanged) {
      location.reload(true)
    }

    return (
      <Bar show={versionChanged}>
        <InnerBar autoRefresh={autoRefresh} onClickRefresh={this.refresh} />
      </Bar>
    )
  }
}

export default AppVersionNotifier
