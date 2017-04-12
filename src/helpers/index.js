import request from 'superagent'
import nocache from 'superagent-no-cache'
import url from 'url'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import Debug from 'debug'
const debug = Debug('zooid-app-version-notifier:helpers')

export function checkVersion(callback) {
  const {protocol, hostname, port} = window.location

  request
  .get(url.format({protocol, hostname, port, pathname: '/version'}))
  .use(nocache)
  .set('Accept', 'application/json')
  .end((error, response) => {
    debug('response', error, response)
    if (error) return callback(error)

    const version = get(response, 'body.version')
    if (isEmpty(version)) {
      return callback(new Error(`Response from /version did not contain a version: '${response.text}'`))
    }

    return callback(null, version)
  })
}
