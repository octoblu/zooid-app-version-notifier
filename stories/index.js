import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import AppVersionNotifier from '../src'

storiesOf('AppVersionNotifier', module)
  .add('Basic', () => (
    <AppVersionNotifier />
  ), { inline: true })
  .add('Basic', () => (
    <AppVersionNotifier />
  ))
