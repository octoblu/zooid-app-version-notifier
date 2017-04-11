import React, { PropTypes } from 'react'

import {checkVersion} from '../helpers'
import AppVersionNotifierBar from '../AppVersionNotifierBar'

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
    if (!this.state.versionChanged) return null

    if (this.props.autoRefresh) {
      location.reload(true)

      return (
        <AppVersionNotifierBar>
          This app has been updated! Refreshing Now...
        </AppVersionNotifierBar>
      )
    }

    return (
      <AppVersionNotifierBar>
        A new version is available!
        <a href="#" onClick={this.refresh}>Refresh</a>
      </AppVersionNotifierBar>
    )
  }
}

export default AppVersionNotifier
