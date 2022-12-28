import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Edit from './Components/Edit'
import Home from './Components/Home';


const App = () => {
  const [usersData, setUsersData] = useState([])
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function fetchUsers() {
      const data = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        .then((res) => res.json()).then((data) => data);
      setUsers(data)
      setUsersData(data)
    })()
  }, [])

  const search = async (value) => {
    setCurrentPage(1);
    const data = usersData;
    setUsers(data.filter(
      (user) => user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value) || user.role.toLowerCase().includes(value)
    ));
  }

  const usersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const showingUsers = users.slice(firstIndex, lastIndex);


  const currentPageUpdate = (number) => {
    setCurrentPage(number);
  }


  const singleUserDelete = (id) => {
    const data = usersData.filter((user) => user.id !== id);
    setUsersData(data);
    setUsers(data);
  }

  const [editUser, setEditUser] = useState({});
  const edit = (user) => {
    setEditUser(user);
  }
  const updateEditUser = (user, name, email, role) => {
    const data = usersData;
    const index = data.indexOf(user);
    data[index].name = name;
    data[index].email = email;
    data[index].role = role;
    setUsers(data);
    setUsersData(data);
  }

  const deleteUsers = (arr) => {
    let data = usersData;
    for (let i = 0; i < arr.length; i++) {
      data = data.filter((user) => user.id !== arr[i]);
    }
    setUsers(data);
    setUsersData(data);
  }



  return (

    <div className='app'>
      <Routes>
        <Route path='/' element={<Home
          search={search}
          showingUsers={showingUsers}
          usersPerPage={usersPerPage}
          users={users}
          currentPage={currentPage}
          currentPageUpdate={currentPageUpdate}
          singleUserDelete={singleUserDelete}
          edit={edit}
          deleteUsers={deleteUsers} />}
        />


        <Route path='/edit' element={<Edit editUser={editUser} updateEditUser={updateEditUser} />} />
      </Routes>
    </div>

  )
}

export default App

