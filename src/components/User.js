import React from 'react'
// import './UserPage.css'

const User = ({ id, name, surname, desc }) => {
  return(
    <>
      <ul>
        <li>
          UserID: { id }
        </li>
        <li>
          Name: { name }
        </li>
        <li>
          Surname: { surname }
        </li>
        <li>
          Description:
          <p>{ desc }</p>
        </li>
      </ul>
      <hr/>
    </>
  )
}
export default User;
