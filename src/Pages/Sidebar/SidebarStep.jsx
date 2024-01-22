import React from 'react'
import classes from './style.module.scss'

const SidebarStep = ({step, title, active}) => {
  return (
    <div className={classes.step}>
      <span className={active?"stepNumber active":"stepNumber"}>{step}</span>
      <div className={classes.stepInfo}>
        <span>STEP {step}</span>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SidebarStep
