import React from 'react'
import { useQuery } from 'react-query'
import fetchPosts from './FetchApi';
import './App.css';
import Form from './Form';
    
function App() {
    const { data, error, isError, isLoading } = useQuery('users', fetchPosts)
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    
    return (
      <>
        <div className=''>
            <h1 className='container'>Users Name</h1>
            {
                data.map((users, id) => {
                    return <li className='container' key={id}>{users.name}</li>
                })
            }
    
        </div>

        <Form/>
        </>
    )
}
    
export default App;