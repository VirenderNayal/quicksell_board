import React from 'react'
import "./card.css"

export default function Card({details}) {
  return (
    <div className='card-main'>
      <div className='top-card'>
        <div>{details.id}</div>
        <div className='img-holder'>
          <img src="https://picsum.photos/200" alt="..." />
          <div className='active-dot'></div>
        </div>
      </div>

      <div className='title'>
        {details.title}
      </div>

      <div className='bottom-card'>
        <div className='l-icon'>
          <span className="material-symbols-rounded">
            priority_high
          </span>
        </div>
        <div className='tag'>
          <span className="material-symbols-rounded">
            radio_button_checked
          </span>
          <p>{details.tag[0]}</p>
        </div>
      </div>
    </div>
  )
}
