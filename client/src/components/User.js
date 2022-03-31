import React from 'react'
import 'bulma/css/bulma.min.css'
import { List } from 'react-bulma-components'
import { useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'
import '@creativebulma/bulma-divider/dist/bulma-divider.css'



const User = () => {

  const users = useSelector(({ users }) => {
    return users
  })

  try {
    const match = useMatch('/users/:id')
    const user = users.find(u => u.id === match.params.id)

    if (!user) {
      return <h2 className="has-text-danger title is-3">blog not found</h2>
    }

    return (
      <div>
        <h2 className="title">{user.name}</h2>
        <div className="divider">

        added blogs
        </div>

        <ul>
          {user.blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
        </ul>
      </div>
    )

  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return null
  }

}

export default User