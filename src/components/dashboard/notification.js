import React from 'react'
import moment from 'moment';

const Notification = (props) => {
    const {notifications} = props;
    console.log(notifications);
    return (
        <div className="section">
        <div className="card z-depth-3">
      <div className='card-content'>
          <div className='card-title'>Notifications</div>
          <ul className="notifications">
              {notifications && notifications.map(item=>{
              return(  
                  <li key={item.key}>
                    <span className="purple-text">{item.user}: </span>
                    <span>{item.content}</span>
                    <p className="grey-text note-date">{moment(item.timestamp.toDate()).fromNow()}</p>
                    {/* <p className="purple-text">{item.timestamp}</p> */}
                  </li>
                  )
                      })}
          </ul>
      </div>
                   </div>
            
        </div>
    )
}

export default Notification