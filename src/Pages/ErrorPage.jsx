import React from 'react'
import { useRouteError, NavLink } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError()
    console.log(error)
  return (
    <> 

        <h1>{error && error.data}</h1>
        <NavLink>
            <button>Go Home</button>
        </NavLink>
    
    </>
  )
}

export default ErrorPage