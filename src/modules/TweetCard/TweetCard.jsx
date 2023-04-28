import HeaderImage from "../../shared/components/HeaderImage/HeaderImage"
import Logo from "../../shared/components/Logo/Logo"
import styles from './tweet-card.module.scss'
import Avatar from '../../images/Boy.png';
import users from "../../data/user.json"

const TweetCard = () => {
    return (

            <div >
             
            <ul>
              
                {users.map(({id, user, tweets, followers}) => {
                    return (
                        <li key={id} className="mainBox">
                            <Logo />
                            <HeaderImage />

                        <img className={styles.avatarka} src={Avatar} alt="Avatarka" />
                <p className={styles.tweets}>{`${tweets} tweets`}</p>
                <p className={styles.followers}>{`${followers} follows`} </p>
                <div className={styles.btnWrapper}>
                    <button className={styles.button}>FOLLOW</button>
                </div> 
                    </li>)
                })}
            </ul>
                               
            </div>           
    )
}

export default TweetCard