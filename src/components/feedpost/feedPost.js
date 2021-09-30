import React, { useState } from "react";
import styles from "./feedpost.module.css";
import ProfileImg from "../profileImg/profileImg";

const FeedPost = (props) => {
  const imgUrl = "https://res.cloudinary.com/khawaja/image/upload/v1631783754/cxuifpxdgokktcwfxipn.jpg";
  const [enableComment, setEnableComment] = useState(false)
  const [likescount, setLikesCount] = useState(0)
  const [comment, setComment] = useState({ commentCount: 0, comments: [] })

  const submitComment = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value)
      let commentsArray = [e.target.value, ...comment.comments]
      setComment({ comments: commentsArray })
    }
  }

  return (
    <div className={styles.feedPostCard}>
      <div className="p-3">
        <div className="row">
          <div className="col-2 col-sm-1">
            <ProfileImg imgUrl={imgUrl} size="lg"></ProfileImg>
          </div>
          <div
            className="col-8 col-sm-10"
            style={{ paddingLeft: "1rem", lineHeight: "5px" }}
          >
            <p className={styles.UserName}>Khawaja Mohsin </p>
            <p className={styles.UserLocation}>LHR, PK</p>
            <p className={styles.PostTime}>1 minute ago</p>
          </div>
          <div className="col-2 col-sm-1">
            <span className="">...</span>
          </div>
        </div>
        <div className="row">
          <p className={styles.postContent}>{props.postContent}</p>
        </div>
        <div className="d-flex">
          <span>{likescount} likes</span>
          <span style={{ paddingLeft: "1rem" }}>{comment.comments.length} Comments</span>
        </div>
      </div>
      <div className={styles.postActioncontainer}>
        <div className="d-flex">
          <p className={styles.actionBtns} onClick={() => setLikesCount(1)}>Like</p>
          <p style={{ paddingLeft: "2rem" }} className={styles.actionBtns} onClick={() => setEnableComment(true)}>Comment</p>
        </div>
        {/* on clicking comment button */}
        {enableComment &&
          <div className="">
            <div className="d-flex">
              <div>
                <ProfileImg imgUrl={imgUrl}></ProfileImg>
              </div>
              <div className={styles.commentInput}>
                <input placeholder="Add a comment" onKeyPress={submitComment} />
              </div>
            </div>
            {/* Actual Comment */}
            {console.log(comment)}
            {comment.comments.map((item) => {
              return <div className="d-flex">
                <div>
                  <ProfileImg imgUrl={imgUrl} ></ProfileImg>
                </div>
                <div className={styles.commentContainer}>
                  <div className={styles.commentMain}>
                    <div className="d-flex justify-content-between">
                      <div style={{ lineHeight: "15px" }}>
                        <p className={styles.UserName}>Khawaja Mohsin </p>
                        <p className={styles.UserLocation}>professional-student</p>
                      </div>
                      <div>
                        <p className={styles.PostTime}>1 minutes ago</p>
                      </div>
                    </div>
                    <p>{item}</p>
                    <p>0likes | Like | Edit | Delete </p>
                  </div>
                </div>
              </div>
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default FeedPost;
