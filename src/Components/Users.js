import React from 'react'
import User from './User'

const Users = ({users,singleUserDelete,edit}) => {
  
  const selectAllUsers=()=>{
    if (document.getElementsByClassName("head-check")[0].checked) {
      const arr=document.getElementsByClassName('row-select');
      for (let index = 0; index < arr.length; index++) {
      arr[index].checked=true;
      }
    
    } else {
      const arr=document.getElementsByClassName('row-select');
      for (let index = 0; index < arr.length; index++) {
      arr[index].checked=false;
      }
    }
    
  
  }
  return (
    <div className='users-container'>
      <div className='user-row'>
        <div className='col col-h'><input className='head-check' type="checkbox" onClick={selectAllUsers}></input></div>
        <div className='col col-h'>name</div>
        <div className='col col-h'>email</div>
        <div className='col col-h'>role</div>
        <div className='col col-h'>actions</div>
      </div>
      {users.map((user)=><User user={user} key={user.id} singleUserDelete={singleUserDelete} edit={edit}/>)}
    </div>
  )
}

export default Users
