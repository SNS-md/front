import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Post from '../components/Post';

function Main() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let isLoading = false;

  const getPosts = async () => {
    // const response = await fetch(`/readPost/?page=${page}`);
    // const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = [
      {
        contents: "# title1\n"+
        "## title2\n"+
        "* list1\n"+
        "* list2\n"+
        "  * list3\n"+
        "1. list3\n"+
        "2. list4\n"+
        "```javascript\n"+
        "const a = 1;\n"+
        "```\n",
        comment: {
          name: '활발한 토끼',
          content: 'comment1',
          date: '2021-08-01'
        },
        name: '예쁜 고양이',
        date: '2021-08-01',
        like: 20,
        id: 1
      },
      {
        contents: "# 제목 예시입니다\n"+
        '> content2\n'+
        'content3\n'+
        "```javascript\n"+
        "const a = 1;\n"+
        "```\n",
        comment: {
          name: '파릇파릇한 뱀',
          content: 'comment1',
          date: '2021-08-02'
        },
        name: '쓸쓸한 낙타',
        date: '2021-08-02',
        like: 10,
        id: 2
      },{
        contents: '> content2',
        comment: {
          name: '파릇파릇한 뱀',
          content: 'comment1',
          date: '2021-08-02'
        },
        name: '쓸쓸한 낙타',
        date: '2021-08-02',
        like: 10,
        id: 3
      }];
    setPosts(posts=>[...posts, ...data]);
    setPage(page + 1);
    setLoading(false);
    isLoading = false;
  };
  
  const handleScroll = (e) => {
    if (isLoading) return;
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollTop + clientHeight == scrollHeight){
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