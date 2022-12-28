import React from 'react'
import Pagination from './Pagination'
import Delete from './Delete'
import Users from './Users'
import SearchBar from './SearchBar'

const Home = ({search,showingUsers,usersPerPage,users,currentPage,currentPageUpdate,singleUserDelete,edit,deleteUsers}) => {
  return (
    <>
      <SearchBar search={search}/>
      <Users users={showingUsers} singleUserDelete={singleUserDelete} edit={edit}/>
      
      <div className='bottom-app'>
      <Delete deleteUsers={deleteUsers}/>

      <Pagination 
      pageNumber={Math.ceil(users.length/usersPerPage)} 
      currentPage={currentPage}
      currentPageUpdate={currentPageUpdate}
      />
      </div>
    </>
  )
}

export default Home
