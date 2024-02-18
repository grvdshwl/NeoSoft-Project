// Posts.js
import React from 'react';

function Posts({ posts }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='table-heading'>ID</th>
          <th className='table-heading'>Title</th>
          <th className='table-heading'>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className='table-data'>{post.id}</td>
            <td className='table-data'>{post.title}</td>
            <td className='table-data'>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Posts;
