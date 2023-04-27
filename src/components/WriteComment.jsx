import styled from "styled-components";
import { useState } from "react";
import { writeComment } from "../utils/api";
import Loading from "./Loading";
import Button from "./Button";

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 10px 0;
`;

const Input = styled.input`
    border: 1px solid var(--main-color100);
    border-radius: 5px;
    padding: 5px;
    line-height: 1.5;
    font-size: 1rem;
    flex: 1;
`;

function WriteComment({id}) {
    const [comment, setComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await writeComment(id, comment);
        window.location.reload();
    }
    const onChange = (e) => {
        setComment(e.target.value);
    }

    return (
        <Form className="" onSubmit={onSubmit}>
            <Input type="text" placeholder="댓글을 입력하세요" onChange={onChange}/>
            <Button className="btn btn-outline-secondary" type="submit" disabled={isLoading||comment.length<2}>
                {isLoading?<Loading size="23px"/>:"등록"}
            </Button>
        </Form>
    );
}

export default WriteComment;