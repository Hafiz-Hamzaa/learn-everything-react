import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
    const navigate = useNavigate()
    const btnClick = () => {
        navigate('/')
    }
  return (
    <div>
        <button onClick={btnClick}>Return to Home Page</button>
    </div>
  )
}

export default Button