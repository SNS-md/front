import { useState, useEffect, useRef } from 'react';
import Loading from '../components/Loading';
import Post from '../components/Post';
import { getPostList } from '../utils/api';

function Main() {
  const [posts, setPosts] = useState([]);
  const page = useRef(1);
  const [sortBy, setSortBy] = useState('id');
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollTop + clientHeight === scrollHeight)
      setLoading(true);
  };

  const getPosts = async () => {
    try {
      const data = await getPostList(page.current, sortBy);
      if (data.length === 0) {
        setIsEnd(true);
        setLoading(false);
        return;
      }
      setPosts(posts => [...posts, ...data]);
      page.current++;
      setLoading(false);
    } catch (e) {
      alert('게시물을 불러오는데 실패했습니다.');
    }
  };

  useEffect(() => {
    if (loading)
      getPosts();
  }, [loading]);

  useEffect(() => {
    if (!isEnd) {
      setLoading(true);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isEnd]);

  return (
    <>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
      {loading && <Loading />}
      {isEnd && <div className="card"><div className="card-body text-center"><h5>모든 게시물을 불러왔습니다.</h5></div></div>}
    </>
  );
}

export default Main;