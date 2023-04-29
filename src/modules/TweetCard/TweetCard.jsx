import HeaderImage from "../../shared/components/HeaderImage/HeaderImage"
import Logo from "../../shared/components/Logo/Logo"
import styles from './tweet-card.module.scss'
import { useEffect, useState } from "react";
import  { fetchAllUsers, putIsFollow } from "../../tools/Api";

const TweetCard = () => {
    const [numFollowers, setNumFollowers] = useState([]);

useEffect(() => {
    try {

        const allUsers = fetchAllUsers();

        allUsers.then(data => {
        return setNumFollowers(data);
      });
    } catch (error) {
      console.log(error.message)
    }
}, []);
    

const handleClick = async (id, isFollow) => {
  const updatedFollowers = isFollow ? parseInt(numFollowers.find((card) => card.id === id).followers) - 1 : parseInt(numFollowers.find((card) => card.id === id).followers) + 1;
  try {
    await putIsFollow(id, !isFollow, updatedFollowers);
    setNumFollowers((prevState) =>
      prevState.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            followers: updatedFollowers.toString(),
            isFollow: !isFollow,
          };
        }
        return card;
      })
    );
  } catch (error) {
    console.log(error);
  }
};

    return (          
            <ul className={styles.list}>              
            {numFollowers.map(({ id, tweets, followers, isFollow, avatar }) => {
                
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
                                <button className={`${styles.button} ${isFollow ? styles.active : ''}`}
                                    onClick={() => handleClick(id, isFollow)}>{isFollow ? "FOLLOWING" : "FOLLOW"}</button>
                        </div> 
                    </li>)
                })}
            </ul>                                       
    )
}

export default TweetCard