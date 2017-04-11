import React, { PropTypes } from 'react'
import styled from 'styled-components'

import {checkVersion} from '../helpers'

const AppVersionNotifierBar = styled.div`
  width: 100%;
  height: 4em;
  background-color: rgba(1, 1, 1, 0.5);

  & a {
    color: white;
    text-decoration: none;
  }
`

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
    console.log('state', this.state)
    const {checkVersion, initialVersion} = this.props

    checkVersion((error, version) => {
      if (error) return

      if (initialVersion !== version) {
        this.setState({versionChanged: true})
      }
    })
  //   const {protocol, hostname, port} = window.location
  //
  //   request
  //     .get(url.format({protocol, hostname, port, pathname: '/version'}))
  //     .use(nocache)
  //     .end((error, response) => {
  //       if (error) return
  //
  //       const result = JSON.parse(response.text)
  //
  //       if (!this.state.lastVersion) {
  //         return this.setState({lastVersion: result.version})
  //       }
  //
  //       if(this.state.lastVersion === result.version) return
  //
  //       this.setState({ versionChanged: true })
  //
  //       if (this.props.autoRefresh) {
  //         this.refresh()
  //       }
  //     })
  }

  refresh = () => {
    location.reload(true)
  }

  render() {

      if(!this.state.versionChanged || this.props.autoRefresh) {
        return null
      }

      return (
        <AppVersionNotifierBar>
          This app has been updated!
          <a href="#" onClick={this.refresh}>Refresh Now</a> to upgrade.
        </AppVersionNotifierBar>
      )
    }
}

export default AppVersionNotifier
