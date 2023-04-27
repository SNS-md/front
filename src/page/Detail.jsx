import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import WriteComment from '../components/WriteComment';
import {getPost} from '../utils/api';

function Detail() {
  const id = Number(useParams().id);
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () =>{
      try{
        const data = await getPost(id);
        setPost(data);
      }catch(e){
        // eslint-disable-next-line no-restricted-globals
        location.replace("/404");
      }
    })();
  }, []);

  if(!post) return <Loading />
  return (
    <>
      <Post post={post}/>
      <WriteComment setPost={setPost} id={id}/>
    </>
  );
}

export default Detail;