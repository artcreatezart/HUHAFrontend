import React from 'react'

const PageHeader = ({ title, image_url }) => {
  return (
    <div className='header-section' style={{ backgroundImage: `linear-gradient( rgba( 52,	73,	102, 0.4 ), rgba( 52,	73,	102, 0.25 )), url(${ image_url })`}}>
        <h1>{ title }</h1>
    </div>
  )
}

export default PageHeader
