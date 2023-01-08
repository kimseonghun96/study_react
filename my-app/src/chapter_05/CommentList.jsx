import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김성훈",
        comment: "안녕하세요.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
