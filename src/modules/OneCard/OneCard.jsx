import HeaderImage from '../../shared/components/HeaderImage/HeaderImage';
import Logo from '../../shared/components/Logo/Logo';
import styles from './one-card.module.scss'

const OneCard = ({ id, tweets, followers, isFollow, avatar, handleClick}) => {
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
}

export default OneCard