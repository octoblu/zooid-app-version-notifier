import React from 'react'
import { storiesOf } from '@kadira/storybook'

import AppVersionNotifier from '../src'
import Wrapper from './Wrapper'

storiesOf('AppVersionNotifier', module)
  .add('Correct Version', () => (
    <Wrapper>
      <AppVersionNotifier initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v1.2.3')} />
    </Wrapper>
  ))
  .add('New Version Available', () => (
    <Wrapper>
      <AppVersionNotifier initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v2.0.0')} />
    </Wrapper>
  ))
  .add('Check Version Errored', () => (
    <Wrapper>
      <AppVersionNotifier initialVersion={'v1.2.3'} checkVersion={(callback) => callback(new Error('oops'))} />
    </Wrapper>
  ))
  .add('Correct Version (autoRefresh)', () => (
    <Wrapper>
      <AppVersionNotifier autoRefresh={true} initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v1.2.3')} />
    </Wrapper>
  ))
  .add('New Version Available (autoRefresh)', () => (
    <Wrapper>
      <AppVersionNotifier autoRefresh={true} initialVersion={'v1.2.3'} checkVersion={(callback) => callback(null, 'v2.0.0')} />
    </Wrapper>
  ))
