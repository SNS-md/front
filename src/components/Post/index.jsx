import PostWrapper from "./PostWrapper";
import Markdown from "./Markdown";
import Comment from "./Comment";
import Writer from "./Writer";
import Like from "./Like";
import { Link } from "react-router-dom";

function Post({ post }) {
  const isDetail = post.comments ? true : false;

  if (isDetail)
    return (
      <>
        <Writer name={post.name} date={post.date} />
        <Markdown contents={post.contents} />
        <Like like={post.likes} id={post.id}/>
        <hr />
        {post.comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </>
    );
  return (
    <>
      <PostWrapper>
        <Link to={`/detail/${post.id}`}>
          <Writer name={post.name} date={post.date} />
          <Markdown contents={post.contents} />
        </Link>
        <Like like={post.likes} id={post.id}/>
        <Link to={`/detail/${post.id}`}>
          <hr />
          {post.comment && <Comment comment={post.comment} />}
        </Link>
      </PostWrapper>
    </>
  );

}

export default Post;