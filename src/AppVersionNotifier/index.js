import request from 'superagent'
import nocache from 'superagent-no-cache'
import React, { PropTypes } from 'react'
import styled from 'styled-components'

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
    interval: PropTypes.number,
    forceRefresh: PropTypes.bool
  }

  static defaultProps = {
    interval: 60 * 1000,
    forceRefresh: false
  }

  state = {
    versionChanged: false
  }

  componentDidMount = () => {
    this.checkInterval = setInterval(this._checkVersion, this.props.interval)
  }

  componentWillUnMount = () => {
    clearInterval(this.checkInterval)
  }

  _checkVersion = () => {
    request
      .get(window.location.origin + '/version')
      .use(nocache)
      .end((error, response) => {
        if (error) return
        const result = JSON.parse(response.text)
        if(!this.state.lastVersion) {
          return this.setState({lastVersion: result.version})
        }
        if(this.state.lastVersion === result.version) return

        this.setState({versionChanged: true})

        if(this.props.forceRefresh) {
          this.refresh()
        }

      })
  }

  refresh = () => {
    location.reload(true)
  }

  render() {

      if(!this.state.versionChanged || this.props.forceRefresh) {
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
