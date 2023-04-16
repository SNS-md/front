import styled from "styled-components";

function WriteComment({setPost}) {
    
    return (
        <div style={{marginBottom:"10px"}}>
            <input type="text" placeholder="댓글을 입력하세요" style={{width:"300px"}}/>
            <button style={{marginLeft:"10px"}}>등록</button>
        </div>
    );
}

export default WriteComment;