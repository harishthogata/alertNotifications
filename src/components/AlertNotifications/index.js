import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const alertNotification = [
  {
    id: 1,
    status: 'Success',
    icon: <AiFillCheckCircle className="success" />,
    description: 'You can access all the files in the folder.',
  },
  {
    id: 2,
    status: 'Error',
    icon: <RiErrorWarningFill className="error" />,
    description:
      'Sorry, You are not authorized to have access to delete the file.',
  },
  {
    id: 3,
    status: 'Warning',
    icon: <MdWarning className="warning" />,
    description: 'Viewers of this file can see comments and suggestions.',
  },
  {
    id: 4,
    status: 'Info',
    icon: <MdInfo className="info" />,
    description: 'Anyone on the internet can view these files.',
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="alerts-heading">Alert Notifications</h1>
        <div className="alerts-container">
          {alertNotification.map(eachAlert => (
            <Notification key={eachAlert.id}>{eachAlert}</Notification>
          ))}
        </div>
      </div>
    )
  }
}

export default AlertNotifications
