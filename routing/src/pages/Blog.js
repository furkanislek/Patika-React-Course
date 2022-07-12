import React from 'react'
import { Link } from "react-router-dom"


function Blog() {
  return (
    <div>
        <h3>Blog</h3>
        
        <ul>
            <li>
               <Link to="/blog/1">Post 1</Link>
            </li>
            <li>
               <Link to="/blog/2">Post 2</Link>
            </li>
            <li>
               <Link to="/blog/3">Post 3</Link>
            </li>
           
        </ul>
    </div>
  )
}

export default Blog