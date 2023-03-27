import React,{useEffect} from 'react'
import MenuItems from "../../Components/Sections/Left/MenuItems"
// import Unknownuser from '../../Components/Sections/ProfileSection/Unknownuser'
import RightSide from '../../Components/Sections/Right/RightSide'
import TweetPost from '../../Components/Sections/ProfileSection/TweetPost'
import style from "./Tweetpage.module.css"
function TweetPage() {


  return (
    <div>
          <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
     <TweetPost /> 
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
    </div>
  )
}

export default TweetPage