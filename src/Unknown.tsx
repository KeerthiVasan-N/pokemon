import React from 'react'
import { Link } from 'react-router-dom'

export default function Unknown() {

  return (
    <div>
    <h4>Sorry the requested page did not found!</h4>
    <Link to="/" className='home'> Back to Home </Link>
    </div>
  )
}
