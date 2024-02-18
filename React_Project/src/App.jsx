import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from '../components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0); 
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.body.toLowerCase().includes(searchText.toLowerCase()) ||
      post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice(
    currentPage * limit,
    (currentPage * limit) + limit
  );

  if(paginatedPosts.length===0){
    return    <div>
      <h1 className='title' >User Posts</h1>
    <input className='text-input' placeholder='search here'  onChange={handleChange} value={searchText} /> <p> No result for search query :<span style={{fontWeight:"bold",marginLeft:4}}>{searchText}</span></p>
</div>  }

  return (
    <div>
    <h1 className='title' >User Posts</h1>
      <input className='text-input'  onChange={handleChange} value={searchText} placeholder='search here' />
      <div className="btn">
        <button disabled={currentPage === 0} onClick={handlePrevPage}>prev</button>
        <div>{currentPage+1}</div>
        <button disabled={currentPage >= Math.ceil(filteredPosts.length / limit) - 1} onClick={handleNextPage}>next</button>
      </div>
     <Posts posts={paginatedPosts}/>
  
    </div>
  );
}

export default App;
