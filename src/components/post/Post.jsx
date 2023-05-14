import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users, Posts } from "../../dummyData";

export default function Post({ post }) {
  // likes section start
  const [like, setLike] = useState(0);
  const [likeStatus, setLikeStatus] = useState(null);

  const likeHandler = (newStatus) => {
    let likes = like;
    if (newStatus === likeStatus) {
      if (newStatus === "liked") {
        likes -= 1;
      } else if (newStatus === "disliked") {
        likes += 1;
      }
      newStatus = null;
    } else if (newStatus === "liked") {
      likes += likeStatus == "disliked" ? 2 : 1;
    } else if (newStatus === "disliked") {
      likes -= likeStatus == "liked" ? 2 : 1;
    }
    const wrapper = () => {
      setLike(likes);
      setLikeStatus(newStatus);
    };
    return wrapper;
  };
  // likes section end
  // comments section start
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };
  // comments section end
  // dropdown section start
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handleDropdownClick = () => {
  //   setShowDropdown(!showDropdown);
  // };
  // dropdown section end
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <div>
              <span className="postUsername">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
          </div>
          <div className="postTopRight">
            <div className="dropdown" onClick={handleDropdownClick}>
              <MoreVert />
              {/* {showDropdown && (
                <div className="dropdownContent">
                  <a onClick={handleDelete} ><i className="fas fa-trash"></i> Delete</a>
                  <a href="#"><i className="far fa-flag"></i> Report</a>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i
              className={
                "likebtn" +
                ` ${likeStatus == "liked" ? "fas" : "far"} fa-thumbs-up`
              }
              onClick={likeHandler("liked")}
            ></i>
            <i
              className={
                "dislikebtn" +
                ` ${likeStatus == "disliked" ? "fas" : "far"} fa-thumbs-down`
              }
              onClick={likeHandler("disliked")}
            ></i>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div
            className="postBottomRight"
            onClick={() => setShowComments(true)}
          >
            <span className="postCommentsTitle">
              {comments.length} comments
            </span>
          </div>
        </div>
        {showComments && (
          <div className="postComments">
            <div className="postCommentsForm">
              <img
                className="postProfileImg"
                src={
                  Users.filter((u) => u.id === post.userId)[0].profilePicture
                }
                alt=""
              />
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentInput}
                onChange={handleCommentInputChange}
                className="postCommentsInput"
              />
              <button
                onClick={handleCommentSubmit}
                className="postCommentsSubmit"
              >
                Submit
              </button>
            </div>
            {comments.length > 0 && (
              <div className="postCommentsList">
                {comments.map((comment, index) => (
                  <div className="postComment" key={index}>
                    <div className="postTopLeft">
                      <img
                        className="postProfileImg"
                        src={
                          Users.filter((u) => u.id === post.userId)[0]
                            .profilePicture
                        }
                        alt=""
                      />
                      {Users.filter((u) => u.id === post.userId)[0].username}
                    </div>
                    <span className="postCommentText">{comment}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
