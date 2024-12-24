// src/pages/PostsPage.tsx
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  user: string;
  content: string;
  date: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<'all' | 'friends'>('all');

  useEffect(() => {
    // Placeholder for fetching posts from the backend
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?filter=${filter}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [filter]);

  return (
    <div style={styles.container}>
      <h1>Posts</h1>
      <div style={styles.filterContainer}>
        <button
          style={filter === 'all' ? styles.activeButton : styles.button}
          onClick={() => setFilter('all')}
        >
          All Posts
        </button>
        <button
          style={filter === 'friends' ? styles.activeButton : styles.button}
          onClick={() => setFilter('friends')}
        >
          Friends' Posts
        </button>
      </div>

      <div style={styles.postsContainer}>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={styles.post}>
              <h3>{post.user}</h3>
              <p>{post.content}</p>
              <small>{post.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  filterContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#ccc',
    border: 'none',
    cursor: 'pointer',
  },
  activeButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#6f4e37',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  post: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default PostsPage;
