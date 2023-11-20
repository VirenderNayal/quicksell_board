import React from 'react'
import "./card.css"
import { backlogIcon, canceledIcon, doneIcon, highpriorityIcon, inporgressIcon, lowpriorityIcon, mediumpriorityIcon, nopriorityIcon, todoIcon, urgentIcon } from '../utils'

export default function Card({ details, view }) {
  const getPriorityIcons = () => {
    if (details.priority === 0) {
      return nopriorityIcon
    } else if (details.priority === 1) {
      return lowpriorityIcon
    } else if (details.priority === 2) {
      return mediumpriorityIcon
    } else if (details.priority === 3) {
      return highpriorityIcon
    }

    return urgentIcon
  }
  const getStatusIcons = () => {
    let icon;
    switch (details.status) {
      case "In progress":
        icon = inporgressIcon
        break;

      case "Todo":
        icon = todoIcon
        break;

      case "Backlog":
        icon = backlogIcon
        break;

      case "Done":
        icon = doneIcon
        break;

      case "Canceled":
        icon = canceledIcon
        break;

      default:
        break;
    }

    return icon;
  }
  return (
    <div className='card-main'>
      <div className='top-card'>
        <div>{details.id}</div>
        {
          view !== 'users' ?
            <div className='img-holder'>
              <img src="https://picsum.photos/200" alt="..." />
              <div className='active-dot'></div>
            </div> :
            <div />
        }
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {
          view === 'users' &&
          getStatusIcons()
        }
        <div className='title' style={{marginLeft : view === 'users' ? "5px" : "0px"}}>
          {details.title}
        </div>
      </div>

      <div className='bottom-card'>
        {
          (view !== 'priority') &&
          <div className='l-icon'>
            {getPriorityIcons()}
          </div>
        }
        <div className='tag' style={{ marginLeft: view !== "priority" ? "10px" : "0px" }}>
          <span className="material-symbols-rounded">
            radio_button_checked
          </span>
          <p>{details.tag[0]}</p>
        </div>
      </div>
    </div>
  )
}
