import styled from "styled-components";
import { useRef } from "react";
import { writeComment } from "../utils/testApi";

function WriteComment({id, setPost}) {
    const comment = useRef();
    const onClick = async () => {
        const result = await writeComment(id, comment.current.value);
        setPost(result);
    }        

    return (
        <div style={{marginBottom:"10px"}}>
            <input type="text" placeholder="댓글을 입력하세요" style={{width:"300px"}} ref={comment}/>
            <button style={{marginLeft:"10px"}} onClick={onClick}>등록</button>
        </div>
    );
}

export default WriteComment;