import React from 'react'
import { storiesOf } from '@kadira/storybook'

import AppVersionNotifier from '../src'

storiesOf('AppVersionNotifier', module)
  .add('Correct Version', () => (
    <AppVersionNotifier initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v1.2.3')} />
  ))
  .add('New Version Available', () => (
    <AppVersionNotifier initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v2.0.0')} />
  ))
  .add('Check Version Errored', () => (
    <AppVersionNotifier initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v2.0.0')} />
  ))
  .add('Correct Version (autoRefresh)', () => (
    <AppVersionNotifier autoRefresh={true} initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v1.2.3')} />
  ))
  .add('New Version Available (autoRefresh)', () => (
    <AppVersionNotifier autoRefresh={true} initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v2.0.0')} />
  ))
