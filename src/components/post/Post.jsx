import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [likeStatus, setLikeStatus] = useState(null)

  const likeHandler = (newStatus) => {
    let likes = like
    if (newStatus === likeStatus){
      if (newStatus === 'liked') {
        likes -= 1
      } else if (newStatus === 'disliked') {
        likes += 1
      }
      newStatus = null
    }
    else if (newStatus === 'liked') {
      likes += likeStatus == "disliked" ? 2 : 1
    } else if (newStatus === 'disliked') {
      likes -= likeStatus == "liked" ? 2 : 1
    }
    const wrapper = () => {
      setLike(likes)
      setLikeStatus(newStatus)
    }
    return wrapper
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg'
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="" />
            <div>
              <span className="postUsername">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i className={"likebtn" + ` ${likeStatus=='liked' ? 'fas': 'far'} fa-thumbs-up`} onClick={likeHandler('liked')}></i>
            <i className={"dislikebtn" + ` ${likeStatus=='disliked' ? 'fas': 'far'} fa-thumbs-down`} onClick={likeHandler('disliked')}></i>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
