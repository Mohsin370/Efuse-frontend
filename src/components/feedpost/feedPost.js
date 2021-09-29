import React from "react";
import styles from "./feedpost.module.css";
import ProfileImg from "../profileImg/profileImg";

const FeedPost = () => {
  const imgUrl =
    "https://res.cloudinary.com/khawaja/image/upload/v1631783754/cxuifpxdgokktcwfxipn.jpg";

  return (
    <div className={styles.feedPostCard}>
      <div className="p-3">
        <div className="row">
          <div className="col-2 col-sm-1">
            <ProfileImg imgUrl={imgUrl} size="lg"></ProfileImg>
          </div>
          <div
            className="col-8 col-sm-10"
            style={{ paddingLeft: "1rem", lineHeight: "8px" }}
          >
            <p>Khawaja Mohsin </p>
            <p>LHR, PK</p>
            <p>1 minute ago</p>
          </div>
          <div className="col-2 col-sm-1">
            <span className="">...</span>
          </div>
        </div>
        <div className="row">
          <p className={styles.postContent}>Testing new Post/Comments</p>
        </div>
        <div className="d-flex">
          <span>0 likes</span>
          <span style={{ paddingLeft: "1rem" }}>0 Comments</span>
        </div>
      </div>
      <div className={styles.postActioncontainer}>
        <div className="d-flex">
          <p>Like</p>
          <p style={{ paddingLeft: "2rem" }}>Comment</p>
        </div>
        {/* on clicking comment button */}
        <div className="">
          <div className="d-flex">
            <div>
              <ProfileImg imgUrl={imgUrl} size="lg"></ProfileImg>
            </div>
            <div className={styles.commentInput}>
              <input placeholder="Add a comment" />
            </div>
          </div>

          <div className="d-flex">
            <div>
              <ProfileImg imgUrl={imgUrl} size="lg"></ProfileImg>
            </div>
            <div className={styles.commentContainer}>
              <div className={styles.commentMain}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Khawaja Mohsin</p>
                    <p>professional-student</p>
                  </div>
                  <div>
                    <p>11 minutes ago</p>
                  </div>
                </div>
                <p>This is What comment Looks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks LikeLooks Like</p>
                <p>0likes | Like | Edit | Delete </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
