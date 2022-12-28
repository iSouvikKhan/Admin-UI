import React from 'react'

const Delete = ({ deleteUsers }) => {
  const handleDelete = () => {
    const users = [];
    const arr = document.getElementsByClassName("row-select");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked === true) {
        users.push(arr[i].value)
      }
    }
    deleteUsers(users);

    const arr2 = document.getElementsByClassName('head-check');
    arr2[0].checked = false;

  }
  return (
    <div className='delete-container'>
      <button className='delete-button' onClick={handleDelete}>Delete Selected</button>
    </div>
  )
}

export default Delete
