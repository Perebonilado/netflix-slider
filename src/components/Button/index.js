import React from 'react'
import styles from './styles.module.css'

const Button = ({
  next, 
  prev,
  handleClick
}) => {
  return (
    <div className={styles.button} onClick={handleClick}>
      {next && <i className="fas fa-solid fa-angle-right"></i>}
      {prev && <i className="fas fa-solid fa-angle-left"></i>}
    </div>
  )
}

export default Button