import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Post from '../components/Post';
import { getPostList } from '../utils/testApi';

function Main() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');
  const [loading, setLoading] = useState(true);
  let isLoading = true;

  const getPosts = async () => {
    const data = await getPostList(page, sortBy);
    setPosts(posts=>[...posts, ...data]);
    setPage(page+1);
    setLoading(false);
    isLoading = false;
  };
  
  const handleScroll = (e) => {
    if (isLoading) return;
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollTop + clientHeight === scrollHeight){
      isLoading = true;
      setLoading(true);
      getPosts();
    }
  };

  useEffect(() => {
    getPosts();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {posts.map((post,i) => (
        <Post key={i} post={post} />
      ))}
      {loading && <Loading />}
    </div>
  );
}

export default Main;