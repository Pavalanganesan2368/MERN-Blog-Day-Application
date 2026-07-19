import React, { useContext } from 'react'
import { DataContext } from '../../../Context/ContextData';

const Footer = () => {
  const { post, allPost } = useContext(DataContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <footer className="bg-blue-600 p-2 text-md font-bold flex justify-between">
      <h1>{allPost.length === 1 ? `Post: ${allPost.length}` : `Posts: ${allPost.length}`}</h1>
      <h1>Developed By Pavalan G</h1>
    </footer>
  )
}

export default Footer