import styled from "styled-components";
import { useRef } from "react";
import { writeComment } from "../utils/api";

function WriteComment({id, setPost}) {
    const comment = useRef();
    const onClick = async () => {
        await writeComment(id, comment.current.value);
        window.location.reload();
    }        

    return (
        <div class="input-group mb-3">
            <div class="col-sm-12">
                <input type="text" class="form-control" style={{width: "30%", display:"inline-block"}} placeholder="댓글을 입력하세요" aria-describedby="button-addon" ref={comment}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon" onClick={onClick}>등록</button>
            </div>
        </div>
    );
}

export default WriteComment;