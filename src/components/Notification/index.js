import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-container">
      <div className="icon">{children.icon}</div>
      <div className="text-close-container">
        <div className="text-container">
          <h1 className={`alert-heading class-${children.id}`}>
            {children.status}
          </h1>
          <p className="description">{children.description}</p>
        </div>
        <div className="close-container">
          <GrFormClose className="inform" />
        </div>
      </div>
    </div>
  )
}

export default Notification
