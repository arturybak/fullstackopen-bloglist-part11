import React from 'react'
import 'bulma/css/bulma.min.css'
import { Notification } from 'react-bulma-components'
import { useSelector } from 'react-redux'



const NotificationR = () => {
  const notification = useSelector(({ notification }) => {
    return notification
  })

  if (!notification.content) {
    return null
  }

  return (
    <Notification className='is-light' color={notification.variation}>
      {notification.content}
    </Notification>
  )
}

export default NotificationR


