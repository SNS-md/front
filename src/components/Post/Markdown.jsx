import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const MarkdownWrapper = styled.div`
    h1{
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    h1::before{
        content: "|";
        margin-right: 10px;
    }
    h2{
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
    h2::before{
        content: "-";
        margin-right: 10px;
    }
    h3{
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
    ul,ol{
        padding-left: 20px;
    }
    li{
        font-size: 1rem;
        line-height: 1.8rem;
    }
    li::marker{
        font-size: 0.8rem;
    }
    pre{
        background-color: var(--main-color900);
        color: #fff;
        padding: 10px;
        border-radius: 5px;
    }
    code{
      font-family: 'Nanum Gothic Coding', monospace;
    }
    blockquote{
      background-color: var(--main-color50);
      color: var(--main-color900);
      padding: 3px;
      margin: 10px 0 10px 1em;
      border-left: 5px solid var(--main-color900);
      border-radius: 0 5px 5px 0;
    }
`;

export default function Markdown({ contents }) {
    return (
        <MarkdownWrapper>
            <ReactMarkdown>{contents}</ReactMarkdown>
        </MarkdownWrapper>
    )
}