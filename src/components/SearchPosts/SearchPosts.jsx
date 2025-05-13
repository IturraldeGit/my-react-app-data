import { useState, useEffect } from 'react';

const SearchPosts = () => {
    const [query, setQuery] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?title=${query}`)
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching data:', error()));
    
    }, [query]);


    
    return (
        <div>
            <h2>User List</h2>
            <input 
                placeholder='Search posts by title'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <ul>
                {    
                    posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SearchPosts;