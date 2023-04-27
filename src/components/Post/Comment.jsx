import Writer from "./Writer";

function Comment({comment}) {
    
    return (
        <section style={{marginBottom:"10px",marginLeft:"20px"}}>
            <Writer name={comment.name} date={comment.date} isComment={true}/>
            <span style={{marginLeft:"10px"}}>{comment.contents}</span>
        </section>
    );
}

export default Comment;