import HeaderImage from "../../shared/components/HeaderImage/HeaderImage"
import Logo from "../../shared/components/Logo/Logo"
import styles from './tweet-card.module.scss'
import Avatar from '../../images/Boy.png';
import { useEffect, useState } from "react";
import fetchUsers from "../../tools/Api";

const TweetCard = () => {
    const [numFollowers, setNumFollowers] = useState([]);

useEffect(() => {
    try {
      const films = fetchUsers();

        films.then(data => {
        return setNumFollowers(data);
      });
    } catch (error) {
      console.log(error.message)
    }
  }, []);



    const handleClick = (id, isFollowing) => {
        setNumFollowers((prevState) =>
        prevState.map((card) =>
        {
            if (card.id === id) {
                return !isFollowing ? { ...card, followers: parseInt(card.followers) + 1, isFollowing: true}
                    : { ...card, followers: parseInt(card.followers) - 1, isFollowing: false}

          } return card}
      ))


    }

    return (          
            <ul className={styles.list}>              
            {numFollowers.map(({ id, tweets, followers, isFollowing, avatar }) => {
                
                const num = parseInt(followers);
                const numWithCommas = num.toLocaleString('en-US');
                    return (
                    <li key={id} className="mainBox">
                        <Logo />
                        <HeaderImage />
                        <div className={styles.avatarka}>
                            <div className={styles.avatarWrapper}>
                                <img className={styles.avatarImage} src={avatar} alt="Avatarka" />
                            </div>
                        </div>                        
                        <p className={styles.tweets}>{`${tweets} tweets`}</p>
                            <p className={styles.followers}>{`${numWithCommas} follows`} </p>
                        <div className={styles.btnWrapper}>
                                <button className={`${styles.button} ${isFollowing ? styles.active : ''}`}
                                    onClick={() => handleClick(id, isFollowing)}>{isFollowing ? "FOLLOWING" : "FOLLOW"}</button>
                        </div> 
                    </li>)
                })}
            </ul>                                       
    )
}

export default TweetCard