import React, {PropTypes} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import Bar from '../Bar'
import styles from './styles.css'

var propTypes = {
  children: PropTypes.node.isRequired,
}

var defaultProps = {

}

export function AnimatedBar(props) {
  return (
    <div className={styles.bar}>
      <Bar>
        <CSSTransitionGroup
          transitionName="zooid-app-version-notifier"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {props.children}
        </CSSTransitionGroup>
      </Bar>
    </div>
  )
}

AnimatedBar.propTypes    = propTypes
AnimatedBar.defaultProps = defaultProps

export default AnimatedBar
