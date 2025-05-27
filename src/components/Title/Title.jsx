import React from 'react'
import'./Title.css'

const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
         
      <h2>{title}</h2>
       <h4>{subTitle}</h4>
    </div>
  )
}

export default Title
