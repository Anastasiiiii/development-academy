import React from "react";

const Comment  = ({ personName, profession, text }) => {
    return (
        <div className="carousel-content">
                <h4>{personName}</h4>
                <p className="profession">{profession}</p>
                <p className="comment-text">{text}</p>
            </div>
    )
}

export default Comment;