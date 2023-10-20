import React from 'react'
import Header from '../header/header'

const AppLayout = ({children}: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout