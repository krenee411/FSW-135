import React, { useContext } from 'react'
import IssueForm from '../components/IssueForm'
import { UserContext } from '../Context/userProvider'

export default function Profile(){

  const { user: {username} } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Todo</h3>
      <IssueForm addIssue={addIssue}/>
    </div>
  )
}