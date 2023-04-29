import HeaderImage from "../../shared/components/HeaderImage/HeaderImage"
import Logo from "../../shared/components/Logo/Logo"
import styles from './tweet-card.module.scss'
import Avatar from '../../images/Boy.png';
import { useEffect, useState } from "react";
import fetchUsers from "../../tools/Api";

const TweetCard = () => {
    const [numFollowers, setNumFollowers] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(false);

useEffect(() => {
    try {
      const films = fetchUsers();

        films.then(data => {
          console.log(data)
        return setNumFollowers(data);
      });
    } catch (error) {
      console.log(error.message)
    }
  }, []);



    const handleClick = (id, num, isFollowing) => {
        setToggleBtn(!toggleBtn);
        setNumFollowers((prevState) =>
        prevState.map((card) =>
        {
            if (card.id === id) {
                return !isFollowing ? { ...card, followers: parseInt(card.followers) + 1, isFollowing: toggleBtn}
                    : { ...card, followers: parseInt(card.followers) - 1, isFollowing: toggleBtn}

          } return card}
 
      
        
        //   ? { ...card, followers: parseInt(card.followers) + 1, isFollowing: toggleBtn }
        //   : card
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
                            <button className={styles.button} onClick={()=>handleClick(id,num,isFollowing)}>{isFollowing ? "Following" : "FOLLOW"}</button>
                        </div> 
                    </li>)
                })}
            </ul>                                       
    )
}

export default TweetCard