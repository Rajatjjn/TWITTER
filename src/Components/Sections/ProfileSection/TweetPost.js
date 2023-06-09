import React from "react";
import { useRecoilValue } from "recoil";
import { userTweet, forPassingId,forLocalStorageIndex } from "../../../Recoil/Atom1/Atom";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import style2 from './TweetPost.module.css'
import { tweetPosts } from "../../../ConstData/ConstData";
import { useState } from "react";
// import TweetReply from '../../../Atom/TweetReply/TweetReply';
// import CustomButton from '../../../Atom/Button/CustomButton';
function TweetPost() {
  const [post, setPost] = useState(JSON.parse(localStorage.getItem("constTweetPosts")));
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  let Data = JSON.parse(localStorage.getItem("user"));

  const tweetPostData = useRecoilValue(userTweet);
  const index = useRecoilValue(forPassingId);
  // console.log(post[index].tweetComment[0].tweetComment)
  //console.log(index)
  return (
    <>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar className={style2.avatar} src={tweetPostData.tweetPic} />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                {tweetPostData.name}
                <VerifiedIcon style={{ color: "blue" }} />
              </h3>
            </span>
            <p>{tweetPostData.tweetText}</p>
          </div>
        </div>

        <div className={style2.img}>
          <img
            style={{ width: "30rem", height: "30rem", borderRadius: "15px" }}
            alt="Urlist.jpg"
            src={tweetPostData.tweetPic}
          />
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>

          <UploadIcon />
        </div>
      </div>
     
      {post[index].tweetComment.length > 0 ? (
        <>
          {post[index].tweetComment.map((data) => (
            <div className={style2.wrapper}>
              <div className={style2.container1}>
                <div>
                  <Avatar
                    className={style2.avatar}
                    src="https://i.pinimg.com/originals/95/e0/0a/95e00a18b1a7c7a5f9868e71b020c3c2.gif"
                  />
                </div>

                <div className={style2.innercontainer}>
                  <>
                    <span className={style2.text}>
                      <h3>
                        {Data[getLocalStorageIndex].Name}
                        <VerifiedIcon style={{ color: "#1D9BF0", fontSize: "1.5rem" }} />
                      </h3>
                    </span>
                    <p>{data.tweetComment}</p>
                  </>
                </div>
              </div>
              <div className={style2.icons}>
                <span>
                  {tweetPostData.tweetCount}
                  <ChatBubbleOutlineIcon />
                </span>
                <span>
                  {tweetPostData.retweetCount}
                  <SyncIcon />
                </span>
                <span>
                  {tweetPostData.likesCount}
                  <FavoriteBorderIcon />
                </span>
                <span>
                  {tweetPostData.viewsCount}
                  <PollIcon />
                </span>
                <UploadIcon />
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
       <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar
              className={style2.avatar}
              src="https://i.pinimg.com/originals/95/e0/0a/95e00a18b1a7c7a5f9868e71b020c3c2.gif"
            />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                Elon Musk
                <VerifiedIcon style={{ color: "blue" }} />
              </h3>
            </span>
            <p>{tweetPostData.tweetText}</p>
          </div>
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>
          <UploadIcon />
        </div>
      </div>
    </>
  );
}

export default TweetPost;