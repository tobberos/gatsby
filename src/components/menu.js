import React from 'react'
import menuStyles from './menu.module.css'
export default ({ children }) => (
    <div className={menuStyles.menu}>{children}</div>
  )