import React from 'react'

const Card = (props) => {
    console.log(props)
    let {image,title,content} = props
  return (
    <div className='card'>
     <img src={image} alt="Communication image"  className="card-image" />
     <h3>{title}</h3>
     <p>{content}</p>
    </div>
  )
}

export default Card
