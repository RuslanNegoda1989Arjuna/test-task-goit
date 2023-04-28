import HeaderImage from "../../shared/components/HeaderImage/HeaderImage"
import Logo from "../../shared/components/Logo/Logo"
import styles from './tweet-card.module.scss'
import Avatar from '../../images/Boy.png';
import users from "../../data/user.json"
import { useState } from "react";

const TweetCard = () => {
    const [numFollowers, setNumFollowers] = useState(users);
    const [toggleBtn, setToggleBtn] = useState(false);
    console.log(numFollowers)


    const handleClick = (id, num) => {
        setToggleBtn(!toggleBtn);
        setNumFollowers((prevState) =>
      prevState.map((card) =>
      
        card.id === id
          ? { ...card, followers: parseInt(card.followers) + 1, isFollowing: toggleBtn }
          : card
      ))


    }

    return (          
            <ul className={styles.list}>              
            {numFollowers.map(({ id, tweets, followers, isFollowing }) => {
                
                const num = parseInt(followers);
                const numWithCommas = num.toLocaleString('en-US');
                    return (
                    <li key={id} className="mainBox">
                        <Logo />
                        <HeaderImage />
                        <img className={styles.avatarka} src={Avatar} alt="Avatarka" />
                        <p className={styles.tweets}>{`${tweets} tweets`}</p>
                            <p className={styles.followers}>{`${numWithCommas} follows`} </p>
                        <div className={styles.btnWrapper}>
                            <button className={styles.button} onClick={()=>handleClick(id,num)}>{isFollowing ? "Following" : "FOLLOW"}</button>
                        </div> 
                    </li>)
                })}
            </ul>                                       
    )
}

export default TweetCard